function solution(citations) {
    citations = citations.sort((a,b)=>b-a);
    let idx = 1;
    while(idx <= citations[idx-1]) idx += 1;
    return idx-1;
}