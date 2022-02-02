import type { NextApiRequest, NextApiResponse } from 'next'
import jwt, { VerifyErrors } from 'jsonwebtoken'

import { key } from '../../global'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') get(req, res)
  else res.json({ error: 'bad req' })
}

function get(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.query

  if (!token) return res.json({ error: 'token is not provided' })

  jwt.verify(token as string, key, (err: VerifyErrors | null) => {
    if (err) return res.json({ valid: false })

    res.json({ valid: true })
  })
}
