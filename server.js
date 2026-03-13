import express from 'express'
import path from 'path'

const app = express()

const port = 3001

const __dirname = import.meta.dirname

app.use(express.static(path.join(__dirname,'public')))


app.get("/contact",(req,res) => {
    res.sendFile(path.join(__dirname,'public/contact.html'))
})

app.listen(port,()=>{
    console.log("Server running on port: "+port)
})