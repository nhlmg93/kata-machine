export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);
    seen[source] = true;
    const q: number[] = [source];
    while (q.length) {
        const curr = q.shift() as number;
        if (curr === needle) {
            break;
        }
        const adjs = graph[curr];
        for (let index = 0; index < adjs.length; index++) {
            if (adjs[index] === 0) {
                continue;
            }
            if (seen[index]) {
                continue;
            }
            seen[index] = true;
            prev[index] = curr;
            q.push(index);
        }
        seen[curr] = true;
    }
    let curr = needle;
    const out: number[] = [];
    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    if (out.length) {
        return [source].concat(out.reverse());
    }
    return null
}
