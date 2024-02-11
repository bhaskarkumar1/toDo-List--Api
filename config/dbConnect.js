const mongoose=require("mongoose")


mongoose.connect('mongodb://127.0.0.1:27017/task').then((result)=>{
    console.log("Db connection Success")

}).catch((err)=>{
console.log("error establishing connection to DB")
})


