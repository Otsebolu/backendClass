import express from "express";

//instantiate an app
const app = express();

app.get("/", (req, res) =>{
    res.send("hello world")

})

app.get("/about", (req, res) =>{
    res.send("this is about page")

})

app.get("/contact/:name/:age", (req, res) =>{
    console.log(req.params)
    const age = parseInt(req.params.age);
    //res.send("conatct us @ rose@meta.com")
    res.send(`This page is the contact page for ${req.params.name},he is ${age} years old`);

})

app.listen(3001, () => {
    console.log(`Example app listening on port 3001`)
    
  })