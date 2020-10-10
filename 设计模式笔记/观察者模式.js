// 定义：发布订阅，一对多
// 作用：保存状态，状态变化后触发所有观察者对象

class Subject {
    constructor() {
        this.status = 0
        this.observers = []
    }
    getStatus() {
        return this.status
    }
    setStatus(status) {
        this.status = status
        this.notifyAll()
    }
    notifyAll() {
        this.observers.forEach(observer => observer.update())
    }
    attach(observer) {
        this.observers.push(observer)
    }
}

class Observer {
    constructor(name, subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update() {
        console.log(`${this.name} update : ${this.subject.getStatus()}`);
    }
}

let subject = new Subject()
let ob1 = new Observer('hello',subject)
let ob2 = new Observer('xiaoli',subject)
let ob3 = new Observer('tianna',subject)

subject.setStatus(3)
setTimeout(() => {
    subject.setStatus(43)
}, 5000);

// 使用场景
// vue生命周期，vue的watch，vuex，bus,
// promise（then里面的函数，等待promise状态变化）,
// 网页事件绑定（click事件等待着点击），node自定义事件