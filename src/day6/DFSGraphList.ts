function walk(
    graph: WeightedAdjacencyList,
    curr: number,
    needle: number,
    seen: boolean[],
    path: number[],
): boolean {
    if (seen[curr]) {
        return false;
    }
    seen[curr] = true;
    path.push(curr);
    if (curr === needle) {
        return true;
    }
    const list = graph[curr];
    for (let index = 0; index < list.length; index++) {
        const edge = list[index];
        if (walk(graph, edge.to, needle, seen, path)) {
            return true;
        }
    }

    path.pop();
    return false;
}
export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const path: number[] = [];
    const seen: boolean[] = new Array(graph.length).fill(false);
    walk(graph, source, needle, seen, path);
    if (path.length === 0) {
        return null;
    }
    return path;
}
