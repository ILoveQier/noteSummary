// 定义：为对象添加新功能
// 作用：不改变原有结构和功能,新增其他功能

class Circle{
    draw(){
        // dosomething
    }
}

class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        // 使用装饰器增加新功能
        this.do()
        // 原有功能不变
        this.circle.draw()
    }
    do(){
        // dosomething
    }
}

// test
let circle = new Circle() 
let decorator = new Decorator(circle)
decorator.draw()


// 使用场景
// 1. es7装饰器 
// 2. core-decorators库


