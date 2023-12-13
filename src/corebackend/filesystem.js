import fs from "fs"

fs.readFile("test.txt","utf-8",(err,data)=>{
    if (err) console.error(err)
    console.log(data)
})

fs.writeFile("testWrite.txt","Hello world, welcome to nodejs", (err)=>{
    if (err){
        console.error(err)
        return
    }else{
        console.log("file created")
        return
    }

} )