// 定义：使用者无权访问目标对象，通过代理做授权和控制
// 作用：不能直接访问访问需要的内容，只能访问内容的代理，返回给的数据是经过它处理过的

class RealImg{
    // 想要访问的目标方法
    display(){}
}

class ProxyImg {
    constructor() {
        this.realimg = new RealImg()
    }
    display() {
        // 中间可能会加入其它代码，改变一些逻辑啥的
        // 调用原本就要访问的方法
        this.realimg.display()
    }
}

// test
let proxyimg = new ProxyImg()
proxyimg.display()

// 使用场景
// 1. 网页事件代理
// 2. jq $.proxy
// 3. es6 Proxy