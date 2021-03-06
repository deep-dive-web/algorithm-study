# 그래프

## 1. 그래프의 개념
- 단순히 노드(N, node)와 그 노드를 연결하는 간선(E, edge)을 하나로 모아 놓은 자료 구조

- 즉, 연결되어 있는 객체 간의 관계를 표현할 수 있는 자료 구조이다.
- Ex) 지도, 지하철 노선도의 최단 경로, 전기 회로의 소자들, 도로(교차점과 일방 통행길), 선수 과목 등
그래프는 여러 개의 고립된 부분 그래프(Isolated Subgraphs)로 구성될 수 있다.

## 2. 그래프와 관련된 용어
- 정점(vertex): 위치라는 개념. (node 라고도 부름)
- 간선(edge): 위치 간의 관계. 즉, 노드를 연결하는 선 (link, branch 라고도 부름)
- 인접 정점(adjacent vertex): 간선에 의 해 직접 연결된 정점 
- 정점의 차수(degree): 무방향 그래프에서 하나의 정점에 인접한 정점의 수 
- 무방향 그래프에 존재하는 정점의 모든 차수의 합 = 그래프의 간선 수의 2배
- 진입 차수(in-degree): 방향 그래프에서 외부에서 오는 간선의 수 (내차수 라고도 부름)
- 진출 차수(out-degree): 방향 그래픙에서 외부로 향하는 간선의 수 (외차수 라고도 부름)
- 방향 그래프에 있는 정점의 진입 차수 또는 진출 차수의 합 = 방향 그래프의 간선의 수(내차수 + 외차수)
- 경로 길이(path length): 경로를 구성하는 데 사용된 간선의 수
- 단순 경로(simple path): 경로 중에서 반복되는 정점이 없는 경우
- 사이클(cycle): 단순 경로의 시작 정점과 종료 정점이 동일한 경우

## 3. 그래프의 특징
- 정점(vertex): 위치라는 개념. (node 라고도 부름)
- 간선(edge): 위치 간의 관계. 즉, 노드를 연결하는 선 (link, branch 라고도 부름)
- 인접 정점(adjacent vertex): 간선에 의 해 직접 연결된 정점
- 정점의 차수(degree): 무방향 그래프에서 하나의 정점에 인접한 정점의 수
- 무방향 그래프에 존재하는 정점의 모든 차수의 합 = 그래프의 간선 수의 2배
- 진입 차수(in-degree): 방향 그래프에서 외부에서 오는 간선의 수 (내차수 라고도 부름)
- 진출 차수(out-degree): 방향 그래픙에서 외부로 향하는 간선의 수 (외차수 라고도 부름)
- 방향 그래프에 있는 정점의 진입 차수 또는 진출 차수의 합 = 방향 그래프의 간선의 수(내차수 + 외차수)
- 경로 길이(path length): 경로를 구성하는 데 사용된 간선의 수
- 단순 경로(simple path): 경로 중에서 반복되는 정점이 없는 경우
- 사이클(cycle): 단순 경로의 시작 정점과 종료 정점이 동일한 경우

## 4. 그래프의 종류
### 무방향 그래프 vs 방향 그래프
- 무방향 그래프(Undirected Graph)
  - 무방향 그래프의 간선은 간선을 통해서 양 방향으로 갈 수 있다.
  - 정점 A와 정점 B를 연결하는 간선은 (A, B)와 같이 정점의 쌍으로 표현한다.
    - (A, B)는 (B, A) 동일
  - Ex) 양방향 통행 도로
- 방향 그래프(Directed Graph)
  - 간선에 방향성이 존재하는 그래프
  - A -> B로만 갈 수 있는 간선은 <A, B>로 표시한다.
    - <A, B>는 <B, A>는 다름
    
### 가중치 그래프
- 가중치 그래프(Weighted Graph)
  - 간선에 비용이나 가중치가 할당된 그래프
  - ‘네트워크(Network)’ 라고도 한다.
    - Ex) 도시-도시의 연결, 도로의 길이, 회로 소자의 용량, 통신망의 사용료 등

### 연결 그래프 vs 비연결 그래프
- 연결 그래프(Connected Graph)
  - 무방향 그래프에 있는 모든 정점쌍에 대해서 항상 경로가 존재하는 경우
  - Ex) 트리(Tree): 사이클을 가지지 않는 연결 그래프
- 비연결 그래프(Disconnected Graph)
  - 무방향 그래프에서 특정 정점쌍 사이에 경로가 존재하지 않는 경우
    
### 사이클 vs 비순환 그래프
- 사이클(Cycle)
  - 단순 경로의 시작 정점과 종료 정점이 동일한 경우
    - 단순 경로(Simple Path): 경로 중에서 반복되는 정점이 없는 경우
- 비순환 그래프(Acyclic Graph)
  - 사이클이 없는 그래프

### 완전 그래프
- 완전 그래프(Complete Graph)
  - 그래프에 속해 있는 모든 정점이 서로 연결되어 있는 그래프
  - 무방향 완전 그래프
    - 정점 수: n이면 간선의 수: n * (n-1) / 2
    

# 깊이 우선 탐색 
## 1. 깊이 우선 탐색이란
- 루트 노드(혹은 다른 임의의 노드)에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법

  - 미로를 탐색할 때 한 방향으로 갈 수 있을 때까지 계속 가다가 더 이상 갈 수 없게 되면 다시 가장 가까운 갈림길로 돌아와서 이곳으로부터 다른 방향으로 다시 탐색을 진행하는 방법과 유사하다.
  - 즉, 넓게(wide) 탐색하기 전에 깊게(deep) 탐색하는 것이다.
  - 사용하는 경우: 모든 노드를 방문 하고자 하는 경우에 이 방법을 선택한다.
  - 깊이 우선 탐색(DFS)이 너비 우선 탐색(BFS)보다 좀 더 간단하다.
  - 단순 검색 속도 자체는 너비 우선 탐색(BFS)에 비해서 느리다.
  
## 2. 깊이 우선 탐색(DFS)의 특징
- 자기 자신을 호출하는 순환 알고리즘의 형태 를 가지고 있다.
- 전위 순회(Pre-Order Traversals)를 포함한 다른 형태의 트리 순회는 모두 DFS의 한 종류이다.
- 이 알고리즘을 구현할 때 가장 큰 차이점은, 그래프 탐색의 경우 어떤 노드를 방문했었는지 여부를 반드시 검사 해야 한다는 것이다.
  - 이를 검사하지 않을 경우 무한루프에 빠질 위험이 있다.

## 3. 깊이 우선 탐색(DFS)의 과정
- a 노드(시작 노드)를 방문한다.
  - 방문한 노드는 방문했다고 표시한다.
- a와 인접한 노드들을 차례로 순회한다.
  - a와 인접한 노드가 없다면 종료한다.
- a와 이웃한 노드 b를 방문했다면, a와 인접한 또 다른 노드를 방문하기 전에 b의 이웃 노드들을 전부 방문해야 한다.
  - b를 시작 정점으로 DFS를 다시 시작하여 b의 이웃 노드들을 방문한다.
- b의 분기를 전부 완벽하게 탐색했다면 다시 a에 인접한 정점들 중에서 아직 방문이 안 된 정점을 찾는다.
  - 즉, b의 분기를 전부 완벽하게 탐색한 뒤에야 a의 다른 이웃 노드를 방문할 수 있다는 뜻이다.
  - 아직 방문이 안 된 정점이 없으면 종료한다.
  - 있으면 다시 그 정점을 시작 정점으로 DFS를 시작한다.
    
## 4. 깊이 우선 탐색(DFS)의 시간 복잡도

- DFS는 그래프(정점의 수: N, 간선의 수: E)의 모든 간선을 조회한다.
  - 인접 리스트로 표현된 그래프: O(N+E)
  - 인접 행렬로 표현된 그래프: O(N^2)
- 즉, 그래프 내에 적은 숫자의 간선만을 가지는 희소 그래프(Sparse Graph) 의 경우 인접 행렬보다 인접 리스트를 사용하는 것이 유리하다.

출처
- https://gmlwjd9405.github.io/2018/08/13/data-structure-graph.html
- https://gmlwjd9405.github.io/2018/08/14/algorithm-dfs.html
