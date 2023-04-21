class Stack {
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }
    pop() {
        this.items.pop()
    }
    peek() {
        return this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    getSize() {
        return this.items.length
    }
    print() {
        return console.log(this.items.toString())
    }

}

const stack = new Stack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.getSize())
stack.print()
console.log(stack.peek())
stack.pop()
console.log(stack.getSize())
stack.print()


