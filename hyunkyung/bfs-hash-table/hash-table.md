## 해시 테이블

- 해시 테이블(hash table)이란?
  - 연관 배열(associative array)의 일종으로, 키(key)를 값(value)에 매핑할 수 있는 자료구조이다.

- 버킷(bucket)과 슬롯(slot)

  - 해시 테이블에서 값은 버킷(bucket)과 슬롯(slot)으로 이루어진 형태의 테이블에 저장된다.
    - (이 테이블 자체를 버킷이라고 표현 하기도 함)
    - 버킷(bucket) : 여러개의 슬롯을 저장하는 레코드 형태의 자료 구조로, 버킷의 갯수는 고정적이다.
    - 슬롯(slot) : 해시와 매핑되는 값이 저장되어 있는 공간으로, 하나의 버킷 안에는 여러개의 슬롯이 존재할 수 있다. 슬롯은 하나 이상의 값을 저장할 수 있다.  

- 해시(hash)
  - 해시 함수(hash function)를 통해 얻는 값으로, 해시를 인덱스 또는 주소로 삼아 직접 접근이 가능하도록 한다.
  - (해시 값(hash value) 또는 해시 코드(hash code)라고도 한다.)

- 해시를 이용해서 해시 테이블의 버킷(bucket) 또는 슬롯(slot)에 접근한 뒤 탐색, 삽입, 삭제 등의 연산을 수행한다.

- 해시 함수(hash function)
  - 임의의 길이의 데이터(key)를 고정된 길이의 데이터(해시)로 매핑하는 함수.
  - 이 때, 매핑 전 원래 데이터의 값을 키(key), 매핑 후 데이터의 값을 해시(hash)라고 한다.
  - 즉, key -> hash로 매핑 시켜주는 함수를 해시함수라 한다.

- 좋은 해시 함수의 조건
  - 해시 값이 해시 테이블 주소 영역 내에서 고르게 분포 되어야 한다.
  - 충돌이 적어야 한다. (중복값 최소화)
  - 계산이 빨라야 한다.

- 해싱(hashing)
  - key -> hash -> value로 값을 탐색하는 과정으로, 해시 함수를 사용한 탐색을 가리켜 해싱이라고 한다.
  - 해싱은 매우 빠른 검색을 위한 용도로 많이 사용된다.
  - 평균적으로 O(1)의 탐색 시간을 갖는다. (충돌이 많을 경우 더 느려질 수 있다.)
  - 해싱의 성능은 해시 함수의 성능과 해시 테이블의 크기에 따라 달라진다.

- 해시 충돌(hash collision)
  - 해시함수가 서로 다른 두 개의 키에 대해 동일한 해시값을 내는 경우로, h(k1) == h(k2) 성립하면 해시 충돌이 발생 했다고 한다. (h : 해시함수. k1, k2 : 임의의 key값)
  - 이때, k1, k2 를 동의어(synonym)라 한다.
  - 해싱을 할 때, 해시 충돌이 발생할 수 있기 때문에 해시 충돌에 대한 처리가 반드시 필요하다.
  - 매우 큰 집합(ex : 가능한 모든 사람 이름)을 비교적 작은 크기의 공간(hash table size)에 매핑 시킬 때, 해시 충돌이 발생할 수 있다. 이 경우 table size가 입력 가능한 집합의 크기보다 작기 때문에 완전히 해시 충돌을 피할 수 있는 알고리즘은 존재하지 않는다. (비둘기집 원리)
    

출처
https://gamedevlog.tistory.com/38