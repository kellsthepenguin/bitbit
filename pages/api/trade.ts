import type { NextApiRequest, NextApiResponse } from 'next'
import { JwtPayload } from 'jsonwebtoken'

import { jwtMiddleware } from '../../utils'
import { prisma } from '../../global'

const supportedCoins = ['btc', 'eth']
const supportedMarkets = ['KRW-BTC', 'KRW-ETH']

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  jwtMiddleware(req, res, (payload: JwtPayload) => {
    if (req.method === 'POST') return post(req, res, payload)
    res.json({ error: 'bad req' })
  })
}

interface Wallet {
  ownerId: string
  krw: number
  usd: number
  coins: any
  idx: number
}

async function post(
  req: NextApiRequest,
  res: NextApiResponse,
  payload: JwtPayload
) {
  const { tradeType, amount, market, coinName } = req.body

  const wallet = await prisma.wallet.findFirst({
    where: {
      ownerId: payload.id
    }
  }) as Wallet
  
  if (!(tradeType && amount && market && coinName)) return res.json({ error: 'required bodys not provided' })
  if (amount <= 0) return res.json({ success: true })

  if (!(supportedCoins.includes(coinName) || supportedMarkets.includes(market))) return res.json({ error: 'we dont supports that coin/market.' })

  switch (tradeType) {
    case 'buy': {
      const data = await getMarketData(market)
      const [coinData] = data
      if (data.error) return res.json({ error: 'unknown error occured' })
      const totalPrice = coinData.trade_price * amount

      if (wallet.krw < totalPrice) return res.json({ error: 'you dont have enough money' })

      await prisma.wallet.updateMany({
        where: {
          ownerId: payload.id
        },
        data: {
          krw: wallet.krw - totalPrice,
          coins: Object.assign(wallet.coins, { [coinName]: (wallet.coins[coinName] ? wallet.coins[coinName]: 0) + amount })
        }
      })
      break
    }
    
    case 'sell': {
      const data = await getMarketData(market)
      const [coinData] = data
      if (data.error) return res.json({ error: 'unknown error occured' })
      const sellPrice = coinData.trade_price * amount

      if (amount > wallet.coins[coinName]) return res.json({ error: 'you dont have enough coins' })

      await prisma.wallet.updateMany({
        where: {
          ownerId: payload.id
        },
        data: {
          krw: wallet.krw + sellPrice,
          coins: Object.assign(wallet.coins, { [coinName]: (wallet.coins[coinName] ? wallet.coins[coinName] : 0) - amount })
        }
      })
    }
  }

  res.json({ success: true })
}

async function getMarketData (market: string) {
  const res = await fetch(`https://api.upbit.com/v1/ticker?markets=${market}`)
  const json = await res.json()

  return json
}
