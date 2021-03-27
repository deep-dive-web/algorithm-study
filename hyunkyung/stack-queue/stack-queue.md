# 1. 스택
## 스택(Stack)의 개념
- 한 쪽 끝에서만 자료를 넣고 뺄 수 있는 LIFO(Last In First Out) 형식의 자료 구조
---
- 스택(Stack)의 연산
    - 스택(Stack)는 LIFO(Last In First Out) 를 따른다. 즉, 가장 최근에 스택에 추가한 항목이 가장 먼저 제거될 항목이다.
    - pop(): 스택에서 가장 위에 있는 항목을 제거한다.
    - push(item): item 하나를 스택의 가장 윗 부분에 추가한다.
    - peek(): 스택의 가장 위에 있는 항목을 반환한다.
    - isEmpty(): 스택이 비어 있을 때에 true를 반환한다.
  
- 스택(Stack)의 장단점
1. 장점
  - 간단하게 구현이 가능
2. 단점
  - 스택의 크기가 불확실할때는 확장시 확장 연산이 오래걸리므로 느림

- 스택(Stack)의 사용 사례
  - 재귀 알고리즘을 사용하는 경우 스택이 유용하다.
  - 재귀 알고리즘
    - 재귀적으로 함수를 호출해야 하는 경우에 임시 데이터를 스택에 넣어준다.
    - 재귀함수를 빠져 나와 퇴각 검색(backtrack)을 할 때는 스택에 넣어 두었던 임시 데이터를 빼 줘야 한다.
    - 스택은 이런 일련의 행위를 직관적으로 가능하게 해 준다.
    - 또한 스택은 재귀 알고리즘을 반복적 형태(iterative)를 통해서 구현할 수 있게 해준다
  - 웹 브라우저 방문기록 (뒤로가기)
  - 실행 취소 (undo)
  - 역순 문자열 만들기
  - 수식의 괄호 검사 (연산자 우선순위 표현을 위한 괄호 검사)
    Ex) 올바른 괄호 문자열(VPS, Valid Parenthesis String) 판단하기
  - 후위 표기법 계산

# 2. 큐
-  스택과 달리 한쪽에서 보관하고 한쪽에서는 꺼내는 저장공간. 
- Front 포인터와 Rear(back) 포인터. enqueue, dequeue.
---

- 큐의 연산
  - FIFO(First In First Out) 구조
  - create() : 큐를 생성
  - init() : 큐를 초기화
  - is_empty() : 큐 공백 상태 검사
  - is_full() : 큐 포화 상태 검사
  - enqueue(e) : 큐의 뒤에 요소 추가
  - dequeue() : 큐의 앞에 요소 반환 후 삭제
  - peek() : 삭제하지 않고 앞 요소 반환

- 큐의 활용 사례
  - 큐는 주로 데이터가 입력된 시간 순서대로 처리해야 할 필요가 있는 상황에 이용한다.
  - 우선순위가 같은 작업 예약 (프린터의 인쇄 대기열)
  - 은행 업무
  - 콜센터 고객 대기시간
  - 프로세스 관리
  - 너비 우선 탐색(BFS, Breadth-First Search) 구현
  - 캐시(Cache) 구현
    
- 큐의 장단점
1. 장점
   - 데이터의 삽입과 삭제가 빠르다.
   - 크기가 가변적이다.
   - 앞, 뒤에서 데이터를 삽입/삭제할 수 있다.

2. 단점 
  - 일반적인 큐의 단점 : 큐에 빈 메모리가 남아 있어도 꽉 차있는것으로 판단할 수 있음 rear가 배열의 끝에 도달했을 경우.
    => 개선된 원형 큐가 나옴. 
  - 원형 큐의 단점 : 메모리 공간은 잘 활용하나 배열로 구현되어 있기 때문에 큐의 크기가 제한되는 단점이 존재
    => 링크드리스트로 큐가 나옴.

출처
https://gmlwjd9405.github.io/2018/08/03/data-structure-stack.html
https://galid1.tistory.com/178
https://m.blog.naver.com/PostView.nhn?blogId=minj2477&logNo=220691892859&proxyReferer=https:%2F%2Fwww.google.com%2F
https://devuna.tistory.com/22
https://jeong-pro.tistory.com/97