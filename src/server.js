import express from "express";

//instantiate an app
const app = express();

app.get("/", (req, res) =>{
    res.send("hello world")

})

app.get("/about", (req, res) =>{
    res.send("this is about page")

})

app.get("/contact/:name/:age/:origin", (req, res) =>{
    console.log(req.params)
    const name = req.params.name;
    const age = parseInt(req.params.age);
    const origin = req.params.origin;
    //res.send("conatct us @ rose@meta.com")

    res.json({
        name,
        age,
        origin
    
    })

    
    res.send(`This page is the contact page for ${req.params.name},he is ${age} years old, he is from ${origin} state`);

})

app.listen(3001, () => {
    console.log(`Example app listening on port 3001`)
    
  })