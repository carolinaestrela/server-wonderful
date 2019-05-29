const http = require('http')
const utf8 = require('utf8')

const servidor = http.createServer(function (request, response) {
    if (request.url === '/') {
        response.end('Hello wonderful world!')
    } else if (request.url === '/comidas') {
        if (request.method === 'GET') {
            response.writeHead(200, {
                "Content-Type": "text/html;charset=utf-8"
            })
            response.end("<h1>Respostão diferentona</h1>")
    } else if (request.method === 'POST') {
        response.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        })
        response.end("<h1>Respostão diferentona</h1>")
        }
    }
})
servidor.listen(3000)
console.log("servidor wonderful rodando na porta 3000")