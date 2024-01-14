export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: BinaryNode<number>[] | null = [head];
    while (q.length) {
        const item = q.shift() as BinaryNode<number>;
        if (item.value === needle) return true;
        if (item.left) q.push(item.left);
        if (item.right) q.push(item.right);
    }
    return false
}
