const { appendFile } = require('fs/promises')

function generateRandomString() {
  let str = ''

  for (let step = 0; step < 500; step++) {
    str += String.fromCharCode(Math.floor(Math.random() * 65534 + 1))
  }

  return str
}

appendFile('./private.key', generateRandomString()).then(() => {
  console.log('Done!')
})
