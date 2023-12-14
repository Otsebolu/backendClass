import event from 'events'
class EventEmitter extends event{}
const myEvent = new EventEmitter()

    myEvent.on("greet", ()=>{console.log("hello..")})
    myEvent.on("question", ()=>{console.log("how are you???")})

    myEvent.on("greet person", (name, age)=>{console.log(`hello ${name} how are you doing. You are ${age} old`)})

    myEvent.emit("greet")  //calling fxn
    myEvent.emit("question")  //calling fxn
    myEvent.emit("greet person", "David", 25) // calling fxn
