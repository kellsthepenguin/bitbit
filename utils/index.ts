import { randomBytes } from 'crypto'

function generateRandomString() {
  return randomBytes(128).toString('utf-8').replaceAll('\u0000', '')
}

export {
  generateRandomString
}
