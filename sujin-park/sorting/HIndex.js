/**
 * 프로그래머스 - H-Index
 * @param {number[]} citations 
 * @return {number}
 */
function solution(citations) {
    let result = 0;

    citations.sort((a, b) => b - a);
    citations.forEach((citation) => {
        const count = citations.filter((item) => item >= citation).length;
        if (citation >= count) result = count;
    })
    
    return result;
}

/**
 * 프로그래머스 - H-Index
 * @param {number[]} citations 
 * @return {number}
 */
function solution2(citations) {
    let result = 0;

    citations.sort((a, b) => b - a);
    citations.forEach((citation, index) => {
        const count = index + 1;
        if (citation >= count) result = count;
    })
    
    return result;
}