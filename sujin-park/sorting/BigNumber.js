/**
 * 프로그래머스 - 가장 큰 수
 * @param {number[]} numbers 
 * @return {string}
 */
function solution(numbers) {
    const arrays = numbers
    .map(number => String(number))
    .sort((a, b) => (b + a) - (a + b));
    
    const result = arrays.join('');
    return Number(result) === 0 ? '0' : result;
}