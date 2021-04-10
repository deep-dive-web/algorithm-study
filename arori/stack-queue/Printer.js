function solution(priorities, location) {
  let count = 0;
  let maxIndex = 0;
  const visitiedNode = [];
  while (count !== priorities.length) {
    // 시작 인덱스는 마지막 탐색 인덱스 혹은 0
    const startedIndex = maxIndex;
    // 매 1번의 순회에 사용하는 변수 초기화
    let i = startedIndex; // 현재 인덱스
    let max = 0; // 1번의 순회에서 제일 큰 값
    maxIndex = -1; // 1번의 순회에서 제일 큰 값이 있는 인덱스

    do {
      const isVisitied = visitiedNode[i];

      // 방문한 노드는 제외 & 최대값이면 임시 변수에 관련 정보 저장
      if (!isVisitied && priorities[i] > max) {
        max = priorities[i];
        maxIndex = i;
      }
      i = i === priorities.length - 1 ? 0 : i + 1;
    } while (i !== startedIndex);
    // 한바퀴 다 돌았으면 종료

    count++;
    visitiedNode[maxIndex] = true;
    if (maxIndex === location) return count;
  }

  return count;
}
