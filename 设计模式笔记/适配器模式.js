// 定义：旧接口格式和使用者不兼容,处理兼容转换问题
// 作用：原有功能不能满足需求,加适配器转换一下升级接口功能,

// 转换器
class Adaptor{
    transfer() {
        // dosomething
        return '转换完成'
    }
}
// 要使用的类
class Target{
    constructor() {
        this.adaptor = new Adaptor()
    }
    request() {
        let result = this.adaptor.transfer()
        return result + '可以使用了'
    }
}

// test
let target = new Target()
let res = target.request()
console.log(res);

// 使用场景
// 1 vue computed计算属性
// 2 接口返回不符合前端规范的时候，使用适配器转换成需要的数据格式

