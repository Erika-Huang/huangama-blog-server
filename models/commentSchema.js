const mongoose = require('mongoose')
const Schema = require('mongoose/Schema')
// import { Schema } from 'mongoose'
/**
 * 用户表
 */
const commentSchema = mongoose.Schema({
    content: String, //评论内容
    article_id: { 
        type: Schema.Types.ObjectId, 
        ref: "Article"
    }, //评论所属文章的id
    reply_user_id: { 
        type: Schema.Types.ObjectId, 
        ref: "User" 
    }, //评论人id
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
module.exports = mongoose.model("comment",commentSchema,"comment")