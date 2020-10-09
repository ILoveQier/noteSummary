// 定义：旧接口格式和使用者不减重
// 作用：加适配器转换接口

// 转换器
class Adaptor{
    transfer() {
        // dosomething
        return '转换完成'
    }
}
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
// vue computed计算属性
// 接口返回不符合前端规范的时候，转换成需要的数据格式

