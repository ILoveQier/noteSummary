// 定义：将new操作单独封装
// 作用：可以自定义每个产品在出厂前，封装一些操作，
// 这样只需要工厂不停地去生成，就可以生产出加了额外特性的产品了

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class Factory {
    // 在工厂中，每生产一个产品都可以额外添加新的东西
    create(name, price, discount = 1) {
        // 得到代理对象，即经过处理过的产品数据
        let obj = getDiscount({ name, price }, discount)
        return new Product(obj.name, obj.price)
    }
}
// 如果有折扣，就在工厂模式里进行处理，这里使用了代理模式
function getDiscount(obj, discount) {
    return new Proxy(obj, {
        get: function (target, property, receiver) {
            if (property === 'name') {
                return `${target[property]} 【折扣】`
            }
            if (property === 'price') {
                return target[property] * discount
            }
            return target[property]
        }
    })
}

// test
// 创建一个工厂
let factory = new Factory()
// 工厂制造产品
let p1 = factory.create('镜子', 20)
let p2 = factory.create('台灯', 15, 0.6)
let p3 = factory.create('桌子', 100, 0.75)

console.log(p1, p2, p3);

