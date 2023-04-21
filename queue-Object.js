class Queue {
    constructor() {
        this.items = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(element) {
        this.items[this.tail] = element
        this.tail++
    }
    dequeue() {
        const value = this.items[this.head]
        delete this.items[this.head]
        this.head++
        return value
    }
    isEmpty() {
        return this.tail - this.head === 0
    }
    getSize() {
        return this.tail - this.head
    }
    peek() {
        return this.items[this.head]
    }
    print() {
        return console.log(Object.values(this.items))
    }
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.getSize())
queue.print()
queue.dequeue()
console.log(queue.getSize())
queue.print()