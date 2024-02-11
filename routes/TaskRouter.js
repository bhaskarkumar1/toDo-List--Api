const express=require("express")

const Router=express.Router()
const {getAllTask,createATask,specificTask,updateTask,deleteTask}=require("../controllers/taskController")


Router.get("/",getAllTask)

Router.get("/:task_id",specificTask)

Router.post("/",createATask)


Router.put("/:task_id",updateTask)

Router.delete("/:task_id",deleteTask)


module.exports=Router