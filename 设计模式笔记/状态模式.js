// 定义：一个对象有状态变化，每次状态变化都会触发一个逻辑，不能总用ifelse
// 作用：解决多个ifelse的混乱

// 主体
class Context {
    constructor(){
        this.state = null
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
    }
}
class State {
    constructor(color) {
        this.color = color
    }
    handle(context) {
        context.setState(this)
    }
}


// 场景
// 1. 有限状态机
// 2. promise(pending,fullfilled,rejected)