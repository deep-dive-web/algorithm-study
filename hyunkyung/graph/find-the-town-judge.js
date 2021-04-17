/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if(trust.length === 0 && N===1) return 1;
    if(trust.length < N-1) return -1;

    graphMap = new Map();
    const people = new Set();

    for(let el of trust) {
        graphMap.set(el[1], (graphMap.get(el[1]) || 0) + 1);
        people.add(el[0])
    }
    for(let [person, trust_count] of graphMap) {
        if(trust_count === N-1) return people.has(person)? -1: person;
    }

    return -1;

};