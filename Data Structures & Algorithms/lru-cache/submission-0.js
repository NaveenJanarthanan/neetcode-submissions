class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    
    constructor(capacity) {

        this.cache = new Map();
        this.capacity = capacity

        this.head = new Node(0, 0)
        this.tail = new Node(0, 0)

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    removeNode(node){
        node.prev.next = node.next
        node.next.prev = node.prev
    }

    addToFront(node){
        node.prev = this.head
        node.next = this.head.next

        this.head.next.prev = node
        this.head.next = node
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {

        if(!this.cache.has(key)){
            return -1
        }

        const node = this.cache.get(key)

        this.removeNode(node);
        this.addToFront(node);

        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.cache.has(key)){
            const node = this.cache.get(key)

            node.value = value

            this.removeNode(node);
            this.addToFront(node);

            return
        }

        const newNode = new Node(key, value)

        this.cache.set(key, newNode)

        this.addToFront(newNode)

        if(this.cache.size > this.capacity){
            const lru = this.tail.prev

            this.removeNode(lru)

            this.cache.delete(lru.key)

        }
    }
}
