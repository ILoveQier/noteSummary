// 定义：系统中唯一被使用，一个类只有一个实例（登录框，购物车）
// 作用：防止状态混乱，目前ts支持，js只能模拟

// 定义单例类
class SingleObject {
    login() {
        console.log('login...');
    }
}

// 只能通过获取的方法得到实例，用iife+闭包实现唯一实例
SingleObject.getInstance = (() => {
    let instance = null
    return () => {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()

// test
let p1 = new SingleObject()
let p2 = new SingleObject()
// 普通对象声明方式，两个实例肯定不全等
console.log(p1 === p2);
let p3 = SingleObject.getInstance()
let p4 = SingleObject.getInstance()
// 单例模式产生的实例是全等的
console.log(p3 === p4);
