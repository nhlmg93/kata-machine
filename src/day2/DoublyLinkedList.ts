type Node<T> = {
    item: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const node = { item } as Node<T>;
        this.length++;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) return;
        if (idx === this.length) {
            this.append(item);
            return;
        }
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        this.length++;
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        curr = curr as Node<T>;
        const node = { item } as Node<T>;
        node.next = curr;
        node.prev = curr.prev;
        if (curr.prev) curr.prev.next = node;
        curr.prev = node;
    }

    append(item: T): void {
        const node = { item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.item === item) break;
            curr = curr.next;
        }
        if (!curr) return undefined;

        if (curr.prev) curr.prev.next = curr.next;
        if (curr.next) curr.next.prev = curr.prev;
        if (curr === this.head) this.head = curr.next;
        if (curr === this.tail) this.tail = curr.prev;
        curr.next = curr.prev = undefined;
        this.length--;
        return curr.item;
    }

    get(idx: number): T | undefined {
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr?.item;
    }

    removeAt(idx: number): T | undefined {
        if (idx >= this.length) return undefined;
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        if (!curr) return undefined;

        if (curr.prev) curr.prev.next = curr.next;
        if (curr.next) curr.next.prev = curr.prev;
        if (curr === this.head) this.head = curr.next;
        if (curr === this.tail) this.tail = curr.prev;

        curr.next = curr.prev = undefined;
        this.length--;
        return curr.item;
    }
}
