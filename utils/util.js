/**
 * 通用的工具函数
 */
const log4js = require('./log4j')
// 定义状态码
const CODE = {
    SUCCESS: 200,
    PARAM_ERROR: 10001, // 参数错误
    USER_ACCOUNT_ERROR: 20001, // 账号或密码错误
    USER_LOGIN_ERROR: 30001, // 用户未登录
    BUSINESS_ERROR: 40001, // 业务请求失败
    AUTH_ERROR: 50001, // 认证失败或TOKEN过期
}

// 导出
module.exports = {
    /**
     * 分页结构封装
     * @param {number} pageNum 
     * @param {number} pageSize 
     */
    pager({pageNum=1,pageSize=10}) {
        // 转为数字
        pageNum *= 1
        pageSize *= 1
        const skipIndex = (pageNum-1)*pageSize
        return {
            page: {
                pageNum,
                pageSize
            },
            skipIndex
        }
    },
    success(data='',msg='',code=CODE.SUCCESS) {
        log4js.debug(data)
        return {
            code, data, msg
        }
    },
    fail(data='',msg='',code=CODE.BUSINESS_ERROR) {
        log4js.debug(msg)
        return {
            code, data, msg
        }
    },
    CODE
}