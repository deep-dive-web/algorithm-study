/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const destination = graph.length - 1;
  let answer = [];
  let visited = [];

  const DFS = (vertex, result) => {
    if (visited[vertex]) return;
    if (vertex === destination) {
      answer.push([...result, vertex]);
      return;
    } else {
      visited[vertex] = true;
    }

    for (const newVertex of graph[vertex]) {
      DFS(newVertex, [...result, vertex]);
      visited[newVertex] = false;
    }
  };

  DFS(0, []);
  return answer;
};
