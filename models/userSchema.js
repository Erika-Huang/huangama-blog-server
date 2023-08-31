const mongoose = require('mongoose')

/**
 * 用户表
 */
const userSchema = mongoose.Schema({
    "userId" : Number,      //ID，自增长
    "userName" : String,    //账号
    "userPwd" : String,     //密码，md5加密
    "sex":Number,           //性别 0:男 1：女
    "nickname":String,      //昵称
    "headImgUrl":String,
    "role": {               // 用户角色 0：系统管理员 1： 普通用户
        type:Number,
        default:1
    }, 
    "roleList" : [],        //系统角色
    "createTime" : {        //创建时间
        type:Date,
        default:Date.now()
    },
    "lastLoginTime": {      //更新时间
        type:Date,
        default:Date.now()
    },
    remark:String // 备用字段
})

// 定义模型users、定义配置、关联的集合名称
module.exports = mongoose.model("users",userSchema,"users")