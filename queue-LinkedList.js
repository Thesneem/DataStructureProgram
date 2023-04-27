class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Enqueue operation - add element to the rear of the queue
    enqueue(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    // Dequeue operation - remove element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const dequeuedValue = this.front.value;
        if (this.front === this.rear) {
            this.rear = null;
        }
        this.front = this.front.next;
        this.size--;
        return dequeuedValue;
    }

    // Peek at the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.front.value;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the queue
    getSize() {
        return this.size;
    }

    // Print the elements in the queue
    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let current = this.front;
            let queueElements = '';
            while (current) {
                queueElements += current.value + ' ';
                current = current.next;
            }
            console.log('Queue elements:', queueElements);
            // console.log('Front of Queue:', this.peek());
        }
    }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // Output: Queue elements: 10 20 30, Front of Queue: 10
queue.dequeue();
queue.print(); // Output: Queue elements: 20 30, Front of Queue: 20
console.log(queue.peek()); // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.getSize());