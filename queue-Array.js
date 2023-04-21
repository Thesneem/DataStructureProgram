class Queue {
    constructor() {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element)
    }
    dequeue() {
        this.items.shift()
    }
    isEmpty() {
        return this.items.length === 0
    }
    getSize() {
        return this.items.length
    }
    peek() {
        if (this.isEmpty()) {
            return console.log('Empty')
        }

        return this.items[0]
    }
    print() {
        return console.log(this.items.toString())
    }
}

const queue = new Queue



console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.getSize())
console.log(queue.peek())
queue.print()
queue.dequeue()
queue.print()
