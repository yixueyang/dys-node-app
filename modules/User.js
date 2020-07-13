const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//定义接口要传 的数据类型
const UserSchema = new Schema({
    name:{
        type:String,
        reqiured:true,
    },
    email:{
        type:String,
        reqiured:true,
    },
    password:{
        type:String,
        reqiured:true,
    },
    avatar:{
        type:String,
    },
    data:{
        type:String,
        default:Date.now()
    }
})

module.exports = User = mongoose.model("users",UserSchema);