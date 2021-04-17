/**
 * 797. All Paths From Source to Target
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
  const paths = [];
  const dfs = (index, path) => {
    if (path[path.length - 1] == graph.length - 1) {
      paths.push(path);
      return;
    }

    for(let i = 0; i < graph[index].length; i++) {
      dfs(graph[index][i], [...path, graph[index][i]]);
    }
  }

  dfs(0, [0]);
  return paths;
};