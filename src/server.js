const http  = require('node:http')

const server = http.createServer((req, res) => {
    res.end('hello server')
})

server.listen(3000, () => console.log('server is running in 3000'))