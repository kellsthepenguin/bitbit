import type { NextApiRequest, NextApiResponse } from 'next'
import { JwtPayload } from 'jsonwebtoken'

import { jwtMiddleware } from '../../utils'
import { prisma } from '../../global'

interface Wallet {
  ownerId?: string
  krw: number
  usd: number
  coins: any
  idx?: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  jwtMiddleware(req, res, (payload: JwtPayload) => {
    if (req.method === 'GET') return get(req, res, payload)
    res.json({ error: 'bad req' })
  })
}

async function get(
  _req: NextApiRequest,
  res: NextApiResponse,
  payload: JwtPayload
) {
  const wallet = await prisma.wallet.findFirst({
    where: {
      ownerId: payload.id
    }
  }) as Wallet

  delete wallet.idx
  delete wallet.ownerId

  res.json(wallet)
}
