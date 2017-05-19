const express = require('express')
const fs = require('fs')
const uuid = require('uuid/v4')
const path = require('path')

const ip = process.env.IP || '127.0.0.1'
const port = process.env.PORT || 3000
const app = express()

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Hello, world!')
})

router.get('/uuid', (req, res) => {
  return res.json({
    uuid: uuid()
  })
})

router.get('/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'res', 'pepe.jpg'))
})

app.use(router)

app.listen(port, ip, (err) => {
  if (err) {
    console.trace(err)
  } else {
    console.log(`Launched on http://${ip}:${port}/`)
  }
})

setInterval(() => {
  const memUsage = process.memoryUsage()

  console.log(`Memory usage: ${memUsage.rss}/${memUsage.heapTotal}/${memUsage.heapUsed}`)
}, 5000)

setTimeout(() => {
  console.log('Exception!!!')
  process.exit(0)
}, 3600000)