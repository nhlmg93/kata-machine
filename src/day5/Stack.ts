type Node<T> = {
    item: T
    next?: Node<T>
}
export default class Stack<T> {
    public length: number;
    private top: Node<T> | undefined
    

    constructor() {
        this.length = 0
        this.top = undefined
    }

    push(item: T): void {
        const node = {item} as Node<T>
        this.length++
        if(!this.top){
            this.top = node
            return
        }
        node.next = this.top
        this.top = node
    }
    pop(): T | undefined {
        if(!this.top) return undefined
        this.length--
        const node = this.top as Node<T>
        this.top = this.top.next
        node.next = undefined
        return node.item
    }
    peek(): T | undefined {
        return this.top?.item
    }
}
