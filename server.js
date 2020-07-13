const express = require("express");
const app = express();
//const bodyParser = require("body-parser");
const db = require('./config/keys').mongoURI;
//3.引入数据库
const mongoose = require('mongoose');

const users = require("./routers/api/users")


//使用body-parser中间件

// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json);


//4.连接数据库，根据mongodb官网的提示
mongoose.connect(
    db,
    {useUnifiedTopology: true })
    .then(()=>{
        console.log("connect")
    })
    .catch(err=>{
       console.log(err)
    })

//2.设置路由,可以在页面访问到
app.get("/",(req,res)=>{
    res.send("hello World")
})

//使用routes,
app.use("/api/users",users)

//1.搭建本地服务器
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log('server running on port '+port)
})