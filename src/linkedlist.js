class LinkedList {
    constructor() {
        this.head = null
        this.tail = null

    }

    addToHead(value) {
        const newNode = new Node(value, this.head, null)
        if (this.head) {
            this.head.prev = newNode
        } else {
            this.tail = newNode
        }
        this.head = newNode
    }

    addToTail(value) {
        const newNode = new Node(value, null, this.tail)
        if (this.tail) {
            this.tail.next = newNode
        } else {
            this.head = newNode
        }
        this.tail.newNode
    }

    popHead() {
        if (!this.head) {
            return null
        }
        let value = this.head.value
        this.head = this.head.next
        
        if (this.head) {
            this.head.prev = null
        } else {
            this.tail = null
        }
        return value
    }

    popTail() {
        if (!this.tail) {
            return null
        }
        let value = this.tail.value
        this.tail = this.tail.prev

        if (this.tail) {
            this.tail.next = null
        } else {
            this.head = null
        }
        return this.tail
    }

    search(item) {
        let currentNode = this.head

        while (currentNode) {
            if (currentNode.value === item) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value
        this.next = next
        this.prev = prev
    }
}

let list = new LinkedList()
list.addToHead(10)
list.addToHead(20)
console.log(list)