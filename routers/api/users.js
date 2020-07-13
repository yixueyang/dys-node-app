//登录和注册的api

const express = require("express");
const router = express.Router();

//$route GET api/users/test
//@desc  返回的是请求json数据
//@access  定义私有还是公开接口（public）


//引入路由，接口调通后返回json数据
router.get("/test",(req,res)=>{
    res.json({msg:"login works"})
})

//$route GET api/users/test
//@desc  返回的是请求json数据
//@access  定义私有还是公开接口（public）

// router.post("/register",(req,res)=>{
//     console.log(req.body)
// })


module.exports = router