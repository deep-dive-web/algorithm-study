/**
 * 프로그래머스 - K번째 수
 * @param array [1, 2, 3, 4, ..]
 * @param commands [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 * @return [1, 2, 3]
 */
function solution(array, commands) {
    return commands.map(command => {
        const [first, middle, last] = command;
        const result = array.slice(first - 1, middle).sort((a, b) => a - b);
        return result[last - 1];
    });
}