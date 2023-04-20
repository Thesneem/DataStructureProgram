class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    addNode(value) {
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }

        this.size++;
    }
}

function arrayToLinkedList(arr) {
    const list = new LinkedList();

    for (let i = 0; i < arr.length; i++) {
        list.addNode(arr[i]);
    }

    return list;
}

const link = arrayToLinkedList([1, 2, 3, 4, 5, 6]);
console.log(link);
console.log(link.getSize());
console.log(link.isEmpty());
