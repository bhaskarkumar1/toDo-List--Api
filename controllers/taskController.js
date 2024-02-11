const mongoose=require("mongoose")

const Task=require("../models/Task")



const getAllTask=(req,res)=>{
    Task.find({}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send("Error getting all the tasks")
    })


}


const specificTask=(req,res)=>{
    const id=req.params
    console.log(id)
    Task.find({_id:id.task_id}).then((result)=>{
        res.send(result)
    }).catch((err)=>{
        res.send("cannot able to find the post")
    })

}



const createATask=(req,res)=>{
    // res.send("create task route")
    const input=req.body
    console.log(input)

    const newObj=new Task(input)
    newObj.save().then((result)=>{
        res.send("data sent to DB")
    }).catch((err)=>{
        res.send("error sending data to DB")
    })
    // res.send("Ok post ")

}



const updateTask=(req,res)=>{
    const id=req.params
    Task.findOneAndUpdate({_id:id.task_id},{description:req.body.description}).then((result)=>{
        res.send(result)
    }).catch((error)=>{
        res.send(error)
    })
    // console.log(id) 
    // res.send("OK up")
}




const deleteTask=(req,res)=>{
    Task.deleteOne({_id:req.params.task_id}).then((result)=>{
        res.send("Deleted Successfully")
    }).catch((error)=>{
        res.send("error while deleting the record")
    })
}


module.exports={
    getAllTask,
    specificTask,
    createATask,
    updateTask,
    deleteTask
}