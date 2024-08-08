const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/users")
const userschema=mongoose.Schema({
    username:String,
    email:String,
    image:String
})
module.exports=mongoose.model("user",userschema)