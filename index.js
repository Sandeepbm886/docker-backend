import express, { json } from 'express'
const app=express()
const PORT=5000
app.use(express.json())

app.get("/",(req,res)=>{
    return res.status(200).json({
        message: "Hello from Docker Backend and Jenkins on EC2 Instance"
    })
})

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}....`);
    
})