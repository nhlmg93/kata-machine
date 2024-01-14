export default class ArrayList<T> {
    public length: number;
    private cap: number;
    private arr: Array<T>;
    constructor(cap: number = 5) {
        this.length = 0;
        this.cap = cap;
        this.arr = new Array(this.cap).fill(null);
    }
    private grow() {
        const old = this.arr;
        this.cap *= 2;
        this.arr = new Array(this.cap).fill(null);
        for (let i = 0; i < old.length; i++) this.arr[i] = old[i];
    }

    private shiftRight(idx: number) {
        if (this.length === this.cap) this.grow();
        for (let i = this.length; i > idx; i--) {
            this.arr[i] = this.arr[i - 1];
        }
        this.length++;
    }

    private shiftLeft(idx: number) {
        for (let i = idx; i < this.length; i++) {
            this.arr[i] = this.arr[i + 1];
        }
        this.length--;
    }

    prepend(item: T): void {
        if (this.length === 0) {
            this.arr[0] = item;
            this.length++;
            return;
        }
        this.insertAt(item, 0);
    }
    insertAt(item: T, idx: number): void {
        this.shiftRight(idx);
        this.arr[idx] = item;
    }
    append(item: T): void {
        if (this.length === this.cap) this.grow();
        this.arr[this.length] = item;
        this.length++;
    }
    remove(item: T): T | undefined {
        let i = 0;
        for (; i < this.length; i++) {
            if (this.arr[i] === item) break;
        }
        if (i === this.length) return undefined;
        const val = this.arr[i];
        this.shiftLeft(i);
        return val;
    }
    get(idx: number): T | undefined {
        if (idx < 0) return undefined;
        return idx < this.length ? this.arr[idx] : undefined;
    }
    removeAt(idx: number): T | undefined {
        if(idx >= this.length) return undefined
        const val = this.arr[idx];
        this.shiftLeft(idx)
        return val
    }
}
