import { prisma } from '../../global/'
import { generateRandomString } from '../../utils'

import type { NextApiRequest, NextApiResponse } from 'next'
import { sha256 } from 'js-sha256'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') post(req, res)
  else res.json({ error: 'bad req' })
}

async function post(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, mail, pw } = req.body

  if (id && mail && pw) {
    if (pw.length <= 5) return res.json({ error: 'password is too short' })

    const isMailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)

    if (!isMailValid) return res.json({ error: 'mail is not valid' })

    const existingUser = await prisma.user.findFirst({
      where: {
        mail
      }
    })

    if (existingUser) return res.json({ error: 'that mail is already taken' })

    const salt = generateRandomString()
    const hashedPw = sha256(pw + salt)
    
    const user = await prisma.user.create({
      data: {
        id,
        mail,
        pw: hashedPw,
        salt
      }
    })

    await prisma.wallet.create({
      data: {
        ownerId: user.id
      }
    })

    res.json({ success: true })
  } else {
    res.json({ error: 'id or mail or pw is not provided' })
  }
}
