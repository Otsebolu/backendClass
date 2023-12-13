const greet = (name)=>{
    console.log(`hello ${name}, how are you?`)
}


greet("David")




import http from 'http'

const server = http.createServer((req, res) => {
        res.write("<h1>Hello, this is my second web server!</h1>");
        res.end('Hello world!');
    })

const port=3000
const host="127.0.0.1"
server.listen(port, host, ()=>{
    console.log("connection established")

})