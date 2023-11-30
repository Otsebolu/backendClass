
import http from 'http'

const server = http.createServer((req, res) => {
        res.write("<h1>Hello, this is my first web server!</h1>");
        res.end('Hello world!');
    })

const port=3000
const host="127.0.0.1"
server.listen(port, "localhost", ()=>{
    console.log("connection established")


})