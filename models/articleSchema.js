const mongoose = require('mongoose')

const Schema = mongoose.Schema
const articleSchema = new Schema({
    title: String,   //文章标题
    content: String, //文章内容
    tag: String,     //文章分类
    author:  {
        // articles 存放文章信息，每篇文章都属于某个用户(用author字段和User表的_id字段做关联)
        type:Schema.Types.ObjectId, 
        ref: 'User'
    }, //文章的作者
    views: {
        type: Number,
        default: 0,
    }, //文章的浏览量
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

// 定义模型、定义配置、关联的集合名称
let Article =  mongoose.model('article',articleSchema)

Article.create({
    title:"今天天气很好",
    content:"欲买桂花同载酒，终不似、少年游。",
    tag:"古诗",
    author:"huangama"
}).then(r=>{
    console.log(r);
    console.log("创建并插入数据成功");
})