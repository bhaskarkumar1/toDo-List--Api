const express=require("express")

const app=express()

const taskRoutes=require("./routes/TaskRouter")
require("./config/dbConnect")

const port=8000


app.use(express.json())


app.get("/",(req,res)=>{
    res.send("get route home")
})


app.use("/task",taskRoutes)

app.listen(port,()=>{
    console.log(`server has been started on port : ${port}`)
})