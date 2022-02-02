import { randomBytes } from 'crypto'
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken'
import { key } from '../global'

import type { NextApiRequest, NextApiResponse } from 'next'

function generateRandomString() {
  return randomBytes(128).toString('utf-8').replaceAll('\u0000', '')
}

function jwtMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  cb: (payload: JwtPayload) => any
) {
  const { authorization: token } = req.headers

  if (!token) return res.json({ error: 'token is not provided' })
  jwt.verify(token as string, key, (err: VerifyErrors | null, token?: JwtPayload | string) => {
    if (err) return res.json({ error: 'an error occured during checking token' })

    cb(token as JwtPayload)
  })
}

export {
  generateRandomString,
  jwtMiddleware
}
