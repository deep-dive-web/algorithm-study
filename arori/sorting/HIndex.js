function solution1(citations) {
  let h;
  const n = citations.length;
  const ascendingSort = (a, b) => a - b;
  citations.sort(ascendingSort);

  // 배열 길이가 0이거나, 값이 모두 0인 경우 early return
  if (n <= 0 || citations[n - 1] === 0) return 0;

  let index = Math.floor((n - 1) / 2); // 계산을 시작할 index. 임의의 배열 중간 값

  while (index < n && index >= 0) {
    const citationNum = citations[index]; // 인용 횟수
    const docNum = n - index; // 지정된 인용 횟수이상 인용된 논문 갯수
    if (citationNum <= docNum) {
      h = citationNum;
      index++; // 더  큰H 값을 찾기 위해 다음 인덱스로 이동
    } else {
      if (h !== undefined) return Math.max(h, docNum);
      if (index <= 0) return n;
      index--; // 유효한 H 값을 찾기위해 이전 인덱스로 이동
    }
  }
  return h || 0;
}

function solution2(citations) {
  let h; 
  const n = citations.length;
  const ascendingSort = (a, b) => a - b;
  citations.sort(ascendingSort);

  // 값이 모두 0인 경우 early return
  if (citations[n - 1] === 0) return 0;

  for (let index = 0; index < n; index++) {
    const citationNum = citations[index]; // 인용 횟수
    const docNum = n - index; // 지정된 인용 횟수이상 인용된 논문 갯수
    if (citationNum <= docNum) {
      h = citationNum;
    } else {
      if (h !== undefined) return Math.max(h, docNum);
      return n;
    }
  }
  return h || 0;
}
