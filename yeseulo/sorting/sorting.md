# 정렬

## 선택 정렬(selection sort)

* 제자리 정렬(in-place sorting) 알고리즘의 하나
* 입력 배열(정렬되지 않은 값들) 이외에 다른 추가 메모리를 요구하지 않는 정렬 방법
* 해당 순서에 원소를 넣을 위치는 이미 정해져 있고, 어떤 원소를 넣을지 선택하는 알고리즘

#### 과정

1. 주어진 배열 중에서 최솟값을 찾는다.
2. 그 값을 맨 앞에 위치한 값과 교체한다(패스(pass)).
3. 맨 처음 위치를 뺀 나머지 리스트를 같은 방법으로 교체한다.
4. 하나의 원소만 남을 때까지 위의 과정을 반복한다.

* 선택 정렬은 첫 번째 자료를 두 번째 자료부터 마지막 자료까지 차례대로 비교하여 가장 작은 값을 찾아 첫 번째에 놓고,
* 두 번째 자료를 세 번째 자료부터 마지막 자료까지와 차례대로 비교하여 그 중 가장 작은 값을 찾아 두 번째 위치에 놓는 과정을 반복하며 정렬을 수행한다.
* 1회전을 수행하고 나면 가장 작은 값의 자료가 맨 앞에 오게 되므로 그 다음 회전에서는 두 번째 자료를 가지고 비교한다.
* 마찬가지로 3회전에서는 세 번째 자료를 정렬한다.

#### 특정

* 장점
  * 자료 이동 횟수가 미리 결정된다.
* 단점
  * 안정성을 만족하지 않는다.
  * 즉, 값이 같은 레코드가 있는 경우에 상대적인 위치가 변경될 수 있다.

#### 시간복잡도

* 비교 횟수
  * 두 개의 for 루프의 실행 횟수
  * 외부 루프: `(n-1)`번
  * 내부 루프(최솟값 찾기): `n-1`, `n-2`, … , `2`, `1` 번
* 교환 횟수
  * 외부 루프의 실행 횟수와 동일. 즉, 상수 시간 작업
  * 한 번 교환하기 위하여 3번의 이동(SWAP 함수의 작업)이 필요하므로 3(n-1)번
* `T(n) = (n-1) + (n-2) + … + 2 + 1` = `n(n-1)/2` = `O(n^2)`
* best, worst, average 시간 복잡도 모두 `n^2`, 단순하지만 비효율적


## 삽입 정렬(insertion sort)

* 손안의 카드를 정렬하는 방법과 유사한 알고리즘
* 새로운 카드를 기존의 정렬된 카드 사이의 올바른 자리를 찾아 삽입한다.
* 새로 삽입될 카드의 수만큼 반복하게 되면 전체 카드가 정렬된다.
* 자료 배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교 하여, 자신의 위치를 찾아 삽입함으로써 정렬을 완성하는 알고리즘
* 매 순서마다 해당 원소를 삽입할 수 있는 위치를 찾아 해당 위치에 넣는다.

#### 과정

* 삽입 정렬은 두 번째 자료부터 시작하여 그 앞(왼쪽)의 자료들과 비교하여 삽입할 위치를 지정한 후 자료를 뒤로 옮기고 지정한 자리에 자료를 삽입하여 정렬하는 알고리즘이다.
* 즉, 두 번째 자료는 첫 번째 자료, 세 번째 자료는 두 번째와 첫 번째 자료, 네 번째 자료는 세 번째, 두 번째, 첫 번째 자료와 비교한 후 자료가 삽입될 위치를 찾는다.
* 자료가 삽입될 위치를 찾았다면 그 위치에 자료를 삽입하기 위해 자료를 한 칸씩 뒤로 이동시킨다.
* 처음 Key 값은 두 번째 자료부터 시작한다.

#### 특징

* 장점
  * 안정한 정렬 방법
  * 레코드의 수가 적을 경우 알고리즘 자체가 매우 간단하므로 다른 복잡한 정렬 방법보다 유리할 수 있다.
  * 대부분위 레코드가 이미 정렬되어 있는 경우에 매우 효율적일 수 있다.
* 단점
  * 비교적 많은 레코드들의 이동을 포함한다.
  * 레코드 수가 많고 레코드 크기가 클 경우에 적합하지 않다.

#### 시간복잡도

* 최선의 경우
  * 비교 횟수
    * 이동 없이 1번의 비교만 이루어진다.
    * 외부 루프: `(n-1)`번
  * Best `T(n)` = `O(n)`
* 최악의 경우(입력 자료가 역순일 경우)
  * 비교 횟수
    * 외부 루프 안의 각 반복마다 i번의 비교 수행
    * 외부 루프: `(n-1) + (n-2) + … + 2 + 1` = `n(n-1)/2` = `O(n^2)`
  * 교환 횟수
    * 외부 루프의 각 단계마다 (i+2)번의 이동 발생
    * `n(n-1)/2 + 2(n-1)` = `(n^2+3n-4)/2` = `O(n^2)`
  * Worst `T(n)` = `O(n^2)`


## 버블 정렬(bubble sort)

* 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘
* 인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환한다.
* 선택 정렬과 기본 개념이 유사하다.

#### 과정

* 버블 정렬은 첫 번째 자료와 두 번째 자료를, 두 번째 자료와 세 번째 자료를, 세 번째와 네 번째를, … 이런 식으로 (마지막-1)번째 자료와 마지막 자료를 비교하여 교환하면서 자료를 정렬한다.
* 1회전을 수행하고 나면 가장 큰 자료가 맨 뒤로 이동하므로 2회전에서는 맨 끝에 있는 자료는 정렬에서 제외되고,
* 2회전을 수행하고 나면 끝에서 두 번째 자료까지는 정렬에서 제외된다.
* 이렇게 정렬을 1회전 수행할 때마다 정렬에서 제외되는 데이터가 하나씩 늘어난다.

#### 특징

* 장점
  * 구현이 매우 간단하다.
* 단점
  * 순서에 맞지 않은 요소를 인접한 요소와 교환한다.
  * 하나의 요소가 가장 왼쪽에서 가장 오른쪽으로 이동하기 위해서는 배열에서 모든 다른 요소들과 교환되어야 한다.
  * 특히 특정 요소가 최종 정렬 위치에 이미 있는 경우라도 교환되는 일이 일어난다.
* 일반적으로 자료의 교환 작업(SWAP)이 자료의 이동 작업(MOVE)보다 더 복잡하기 때문에 버블 정렬은 단순성에도 불구하고 거의 쓰이지 않는다.

#### 시간복잡도

* 비교 횟수
  * 최상, 평균, 최악 모두 일정
  * `n-1, n-2, … , 2, 1` 번 = `n(n-1)/2`
* 교환 횟수
  * 입력 자료가 역순으로 정렬되어 있는 최악의 경우, 한 번 교환하기 위하여 3번의 이동(SWAP 함수의 작업)이 필요하므로 `(비교 횟수 * 3)` 번 = `3n(n-1)/2`
  * 입력 자료가 이미 정렬되어 있는 최상의 경우, 자료의 이동이 발생하지 않는다.
* `T(n)` = `O(n^2)`


## 합병 정렬(merge sort)

* ‘존 폰 노이만(John von Neumann)’이라는 사람이 제안한 방법
* 일반적인 방법으로 구현했을 때 이 정렬은 안정 정렬 에 속하며, 분할 정복 알고리즘의 하나 이다.
  * 분할 정복(divide and conquer) 방법
    * 문제를 작은 2개의 문제로 분리하고 각각을 해결한 다음, 결과를 모아서 원래의 문제를 해결하는 전략이다.
    * 분할 정복 방법은 대개 순환 호출을 이용하여 구현한다.

#### 과정

1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

* 하나의 리스트를 두 개의 균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를 합하여 전체가 정렬된 리스트가 되게 하는 방법이다.
* 합병 정렬의 단계
  * 분할(Divide): 입력 배열을 같은 크기의 2개의 부분 배열로 분할한다.
  * 정복(Conquer): 부분 배열을 정렬한다. 부분 배열의 크기가 충분히 작지 않으면 순환 호출 을 이용하여 다시 분할 정복 방법을 적용한다.
  * 결합(Combine): 정렬된 부분 배열들을 하나의 배열에 합병한다.
* 합병 정렬의 과정
  * 추가적인 리스트가 필요하다.
  * 각 부분 배열을 정렬할 때도 합병 정렬을 순환적으로 호출하여 적용한다.
  * 합병 정렬에서 실제로 정렬이 이루어지는 시점은 2개의 리스트를 합병(merge)하는 단계 이다.

#### 특징

* 장점
  * 안정적인 정렬 방법
  * 데이터의 분포에 영향을 덜 받는다. 즉, 입력 데이터가 무엇이든 간에 정렬되는 시간은 동일하다: `O(nlog₂n)`
  * 만약 레코드를 연결 리스트(Linked List)로 구성하면, 링크 인덱스만 변경되므로 데이터의 이동은 무시할 수 있을 정도로 작아진다.
  * 제자리 정렬(in-place sorting)로 구현할 수 있다.
  * 따라서 크기가 큰 레코드를 정렬할 경우에 연결 리스트를 사용한다면, 합병 정렬은 퀵 정렬을 포함한 다른 어떤 졍렬 방법보다 효율적이다.
* 단점
  * 만약 레코드를 배열(Array)로 구성하면, 임시 배열이 필요하다.
  * 제자리 정렬(in-place sorting)이 아니다.
  * 레크드들의 크기가 큰 경우에는 이동 횟수가 많으므로 매우 큰 시간적 낭비를 초래한다.

#### 시간복잡도

* 분할 단계
  * 비교 연산과 이동 연산이 수행되지 않는다.
* 합병 단계
  * 비교 횟수
    * 단계별로 n번 비교
      * 크기가 n/2인 부분 배열 1쌍 * n번 비교 = n번 비교
      * 크기가 n/4인 부분 배열 2쌍 * n/2번 비교 = n번 비교
      * ...
      * 크기가 1인 부분 배열 n/2쌍 * 2번 비교 = n번 비교
    * 순환 호출의 깊이 (합병 단계의 수)
      * 레코드의 개수 n이 2의 거듭제곱이라고 가정`n=2^k`했을 때, `n=2^3`의 경우, `2^3` -> `2^2` -> `2^1` -> `2^0` 순으로 줄어들어 순환 호출의 깊이가 3임을 알 수 있다.
      * 이것을 일반화하면 `n=2^k`의 경우, `k(k=log₂n)`임을 알 수 있다.
    * 각 합병 단계의 비교 연산
      * 크기 1인 부분 배열 2개를 합병하는 데는 최대 2번의 비교 연산이 필요하고, 부분 배열의 쌍이 4개이므로 24=8번의 비교 연산이 필요하다.
      * 다음 단계에서는 크기 2인 부분 배열 2개를 합병하는 데 최대 4번의 비교 연산이 필요하고, 부분 배열의 쌍이 2개이므로 42=8번의 비교 연산이 필요하다.
      * 마지막 단계에서는 크기 4인 부분 배열 2개를 합병하는 데는 최대 8번의 비교 연산이 필요하고, 부분 배열의 쌍이 1개이므로 8*1=8번의 비교 연산이 필요하다.
      * 이것을 일반화하면 하나의 합병 단계에서는 최대 `n`번의 비교 연산을 수행함을 알 수 있다.
    * 순환 호출의 깊이 만큼의 합병 단계 * 각 합병 단계의 비교 연산 = `nlog₂n`
  * 이동 횟수
    * 순환 호출의 깊이 (합병 단계의 수)
      * `k=log₂n`
    * 각 합병 단계의 이동 연산
      * 임시 배열에 복사했다가 다시 가져와야 되므로 이동 연산은 총 부분 배열에 들어 있는 요소의 개수가 n인 경우, 레코드의 이동이 2n번 발생한다.
    * 순환 호출의 깊이 만큼의 합병 단계 * 각 합병 단계의 이동 연산 = `2nlog₂n`
* `T(n)` = `nlog₂n(비교)` + `2nlog₂n(이동)` = `3nlog₂n` = `O(nlog₂n)`


## 셸 정렬(shell sort)

* ‘Donald L. Shell’이라는 사람이 제안한 방법으로, 삽입정렬을 보완한 알고리즘이다.
* 삽입 정렬이 어느 정도 정렬된 배열에 대해서는 대단히 빠른 것에 착안
  * 삽입 정렬의 최대 문제점: 요소들이 삽입될 때, 이웃한 위치로만 이동
  * 즉, 만약 삽입되어야 할 위치가 현재 위치에서 상당히 멀리 떨어진 곳이라면 많은 이동을 해야만 제자리로 갈 수 있다.
  * 삽입 정렬과 다르게 셸 정렬은 전체의 리스트를 한 번에 정렬하지 않는다.

#### 과정

1. 먼저 정렬해야 할 리스트를 일정한 기준에 따라 분류
2. 연속적이지 않은 여러 개의 부분 리스트를 생성
3. 각 부분 리스트를 삽입 정렬을 이용하여 정렬
4. 모든 부분 리스트가 정렬되면 다시 전체 리스트를 더 적은 개수의 부분 리스트로 만든 후에 알고리즘을 반복
5. 위의 과정을 부분 리스트의 개수가 1이 될 때까지 반복

* 정렬해야 할 리스트의 각 k번째 요소를 추출해서 부분 리스트를 만든다. 이때, k를 ‘간격(gap)’ 이라고 한다.
  * 간격의 초깃값: (정렬할 값의 수)/2
  * 생성된 부분 리스트의 개수는 gap과 같다.
* 각 회전마다 간격 k를 절반으로 줄인다. 즉, 각 회전이 반복될 때마다 하나의 부분 리스트에 속한 값들의 개수는 증가한다.
  * 간격은 홀수로 하는 것이 좋다.
  * 간격을 절반으로 줄일 때 짝수가 나오면 +1을 해서 홀수로 만든다.
* 간격 k가 1이 될 때까지 반복한다.

#### 특징

* 장점
  * 연속적이지 않은 부분 리스트에서 자료의 교환이 일어나면 더 큰 거리를 이동한다. 따라서 교환되는 요소들이 삽입 정렬보다는 최종 위치에 있을 가능성이 높아진다.
  * 부분 리스트는 어느 정도 정렬이 된 상태이기 때문에 부분 리스트의 개수가 1이 되게 되면 셸 정렬은 기본적으로 삽입 정렬을 수행하는 것이지만 삽입 정렬보다 더욱 빠르게 수행된다.
  * 알고리즘이 간단하여 프로그램으로 쉽게 구현할 수 있다.

#### 시간복잡도
* 평균: `T(n)` = `O(n^1.5)`
* 최악의 경우: `T(n)` = `O(n^2)`


## 퀵 정렬(quick sort)

* ‘찰스 앤터니 리처드 호어(Charles Antony Richard Hoare)’가 개발한 정렬 알고리즘
* 퀵 정렬은 불안정 정렬에 속하며, 다른 원소와의 비교만으로 정렬을 수행하는 비교 정렬에 속한다.
* 분할 정복 알고리즘의 하나로, 평균적으로 매우 빠른 수행 속도를 자랑하는 정렬 방법
  * 합병 정렬(merge sort)과 달리 퀵 정렬은 리스트를 비균등하게 분할한다.
* 분할 정복(divide and conquer) 방법
  * 문제를 작은 2개의 문제로 분리하고 각각을 해결한 다음, 결과를 모아서 원래의 문제를 해결하는 전략이다.
  * 분할 정복은 보통 순환 호출을 이용하여 구현한다.

#### 과정

1. 리스트 안에 있는 한 요소를 선택한다. 이렇게 고른 원소를 피벗(pivot) 이라고 한다.
2. 피벗을 기준으로 피벗보다 작은 요소들은 모두 피벗의 왼쪽으로 옮겨지고 피벗보다 큰 요소들은 모두 피벗의 오른쪽으로 옮겨진다. (피벗을 중심으로 왼쪽: 피벗보다 작은 요소들, 오른쪽: 피벗보다 큰 요소들)
3. 피벗을 제외한 왼쪽 리스트와 오른쪽 리스트를 다시 정렬한다.
    * 분할된 부분 리스트에 대하여 순환 호출 을 이용하여 정렬을 반복한다.
    * 부분 리스트에서도 다시 피벗을 정하고 피벗을 기준으로 2개의 부분 리스트로 나누는 과정을 반복한다.
4. 부분 리스트들이 더 이상 분할이 불가능할 때까지 반복한다.
    * 리스트의 크기가 0이나 1이 될 때까지 반복한다.

* 하나의 리스트를 피벗(pivot)을 기준으로 두 개의 비균등한 크기로 분할하고 분할된 부분 리스트를 정렬한 다음, 두 개의 정렬된 부분 리스트를 합하여 전체가 정렬된 리스트가 되게 한다.
* 퀵 정렬의 단계
  * 분할(Divide): 입력 배열을 피벗을 기준으로 비균등하게 2개의 부분 배열(피벗을 중심으로 왼쪽: 피벗보다 작은 요소들, 오른쪽: 피벗보다 큰 요소들)로 분할한다.
  * 정복(Conquer): 부분 배열을 정렬한다. 부분 배열의 크기가 충분히 작지 않으면 순환 호출 을 이용하여 다시 분할 정복 방법을 적용한다.
  * 결합(Combine): 정렬된 부분 배열들을 하나의 배열에 합병한다.
  * 순환 호출이 한번 진행될 때마다 최소한 하나의 원소(피벗)는 최종적으로 위치가 정해지므로, 이 알고리즘은 반드시 끝난다는 것을 보장할 수 있다.

#### 특징

* 장점
  * 속도가 빠르다.
    * 시간 복잡도가 `O(nlog₂n)`를 가지는 다른 정렬 알고리즘과 비교했을 때도 가장 빠르다.
  * 추가 메모리 공간을 필요로 하지 않는다.
    * 퀵 정렬은 `O(log n)`만큼의 메모리를 필요로 한다.
* 단점
  * 정렬된 리스트에 대해서는 퀵 정렬의 불균형 분할에 의해 오히려 수행시간이 더 많이 걸린다.
* 퀵 정렬의 불균형 분할을 방지하기 위하여 피벗을 선택할 때 더욱 리스트를 균등하게 분할할 수 있는 데이터를 선택한다.
  * 예) 리스트 내의 몇 개의 데이터 중에서 크기순으로 중간 값(medium)을 피벗으로 선택한다.

#### 시간복잡도

* 최선의 경우
  * 비교 횟수
    * 단계별로 n번 비교
      * 크기가 n/2인 부분 배열 1쌍 * n번 비교 = n번 비교
      * 크기가 n/4인 부분 배열 2쌍 * n/2번 비교 = n번 비교
      * ...
      * 크기가 1인 부분 배열 n/2쌍 * 2번 비교 = n번 비교
    * 순환 호출의 깊이
      * 레코드의 개수 n이 2의 거듭제곱이라고 가정(`n=2^k`)했을 때, `n=2^3`의 경우, `2^3` -> `2^2` -> `2^1` -> `2^0` 순으로 줄어들어 순환 호출의 깊이가 3임을 알 수 있다. 이것을 일반화하면 `n=2^k`의 경우, `k(k=log₂n)`임을 알 수 있다.
      * `k=log₂n`
    * 각 순환 호출 단계의 비교 연산
      * 각 순환 호출에서는 전체 리스트의 대부분의 레코드를 비교해야 하므로 평균 `n`번 정도의 비교가 이루어진다.
      * 평균 `n`번
    * 순환 호출의 깊이 * 각 순환 호출 단계의 비교 연산 = `nlog₂n`
  * 이동 횟수
    * 비교 횟수보다 적으므로 무시할 수 있다.
  * 최선의 경우 `T(n)` = `O(nlog₂n)`
* 최악의 경우
  * 리스트가 계속 불균형하게 나누어지는 경우 (특히, 이미 정렬된 리스트에 대하여 퀵 정렬을 실행하는 경우)
  * 비교 횟수
    * 순환 호출의 깊이
      * 레코드의 개수 n이 2의 거듭제곱이라고 가정(`n=2^k`)했을 때, 순환 호출의 깊이는 n임을 알 수 있다.
      * `n`
    * 각 순환 호출 단계의 비교 연산
      * 각 순환 호출에서는 전체 리스트의 대부분의 레코드를 비교해야 하므로 평균 n번 정도의 비교가 이루어진다.
      * 평균 `n`번
    * 순환 호출의 깊이 * 각 순환 호출 단계의 비교 연산 = `n^2`
  * 이동 횟수
    * 비교 횟수보다 적으므로 무시할 수 있다.
  * 최악의 경우 `T(n)` = `O(n^2)`
* 평균
  * 평균 `T(n)` = `O(nlog₂n)`
  * 시간 복잡도가 `O(nlog₂n)`를 가지는 다른 정렬 알고리즘과 비교했을 때도 가장 빠르다.
  * 퀵 정렬이 불필요한 데이터의 이동을 줄이고 먼 거리의 데이터를 교환할 뿐만 아니라, 한 번 결정된 피벗들이 추후 연산에서 제외되는 특성 때문이다.


## 힙 정렬(heap sort)

* 최대 힙 트리나 최소 힙 트리를 구성해 정렬을 하는 방법
* 내림차순 정렬을 위해서는 최대 힙을 구성하고 오름차순 정렬을 위해서는 최소 힙을 구성하면 된다.
* 자료구조 힙(heap)
  * 완전 이진 트리의 일종으로 우선순위 큐를 위하여 만들어진 자료구조
  * 최댓값, 최솟값을 쉽게 추출할 수 있는 자료구조
  * [더 알아보기](https://gmlwjd9405.github.io/2018/05/10/data-structure-heap.html)

#### 과정

1. 정렬해야 할 n개의 요소들로 최대 힙(완전 이진 트리 형태)을 만든다.
    * 내림차순을 기준으로 정렬
3. 그 다음으로 한 번에 하나씩 요소를 힙에서 꺼내서 배열의 뒤부터 저장한다.
4. 삭제되는 요소들(최댓값부터 삭제)은 값이 감소되는 순서로 정렬되게 된다.

#### 특징

* 장점
  * 시간 복잡도가 좋은편
  * 힙 정렬이 가장 유용한 경우는 전체 자료를 정렬하는 것이 아니라 가장 큰 값 몇개만 필요할 때 이다.
#### 시간복잡도

* 힙 트리의 전체 높이가 거의 `log₂n`(완전 이진 트리이므로)이므로 하나의 요소를 힙에 삽입하거나 삭제할 때 힙을 재정비하는 시간이 `log₂n`만큼 소요된다.
* 요소의 개수가 n개 이므로 전체적으로 `O(nlog₂n)`의 시간이 걸린다.
* `T(n)` = `O(nlog₂n)`


## 위상 정렬(topological sort)

* 위상 정렬(Topological Sort)은 어떤 일을 하는 순서를 찾는 알고리즘이다.
* 방향 그래프에 존재하는 각 정점들의 선행 순서를 위배하지 않으면서 모든 정점을 나열하는 것이다.
* 하나의 방향 그래프에는 여러 위상 정렬이 가능하다.
* 위상 정렬의 과정에서 선택되는 정점의 순서를 위상 순서(Topological Order)라 한다.
* 위상 정렬의 과정에서 그래프에 남아 있는 정점 중에 진입 차수가 0인 정점이 없다면, 위상 정렬 알고리즘은 중단되고 이러한 그래프로 표현된 문제는 실행이 불가능한 문제가 된다.
* 관련 문제: 각각 작업이 완료되어야만 끝나는 프로그램, 선수과목, 줄 세우기

#### 과정
큐를 이용하는 방법

1. 진입 차수가 0인 정점(즉, 들어오는 간선의 수가 0)을 선택
    * 진입 차수가 0인 정점이 여러 개 존재할 경우 어느 정점을 선택해도 무방하다.
    * 초기에 간선의 수가 0인 모든 정점을 큐에 삽입
2. 선택된 정점과 여기에 부속된 모든 간선을 삭제
    * 선택된 정점을 큐에서 삭제
    * 선택된 정점에 부속된 모든 간선에 대해 간선의 수를 감소
3. 위의 과정을 반복해서 모든 정점이 선택, 삭제되면 알고리즘 종료

#### 시간복잡도
* `O(V+E)`
  * 정점의 갯수 + 간선의 갯수만큼 소요. 매우 빠른 알고리즘 중 하나다.


## 참고
* [https://gmlwjd9405.github.io/tags#sort](https://gmlwjd9405.github.io/tags#sort)