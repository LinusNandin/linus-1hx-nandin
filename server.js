const http = require('http')
const server = http.createServer((req, res) => {
    console.log('New connection')
    res.end('Hello boi wasssup, noew updating when file changes')
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () =>console.log('listning '))
