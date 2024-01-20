type Node<T> = {
    item: T;
    next?: Node<T>;
};
export default class Queue<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;

    constructor() {
        this.length = 0;
        this.tail = this.head = undefined;
    }

    enqueue(item: T): void {
        const node = { item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        if(this.tail) this.tail.next = node
        this.tail = node
        return;
    }
    deque(): T | undefined { 
        if(!this.head) return undefined
        this.length--
        const curr = this.head
        if(this.length === 0){
            this.tail = this.head = undefined
            return curr.item
        }
        this.head = curr.next
        curr.next = undefined
        return curr.item

    }
    peek(): T | undefined {
        return this.head?.item
    }
}
