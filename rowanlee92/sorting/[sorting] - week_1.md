# [정렬] - 선택정렬, 삽입정렬, 버블정렬, 합병정렬, 셸정렬

## 01. 선택정렬 (selection sort)

> 가장 작은 요소부터 선택해 알맞은 위치로 옮겨서 순서대로 정렬하는 알고리즘   
   
선택정렬은 다음과 같은 순서로 이루어진다.

1. 주어진 리스트에서 **최솟값**을 찾는다.   
2. 그 값을 **맨 앞에 위치한 값과 교체**한다.   
3. 정렬된 요소를 제외한 나머지 리스트를 같은 방법으로 교체한다.(반복)   
   

## 선택정렬 - 예시
       
![](https://user-images.githubusercontent.com/39042837/110416254-b7351c80-80d6-11eb-8f28-72a59ebf05b4.jpeg)    
    
* 정렬되지 않은 위의 항목들을 이용하여 선택정렬을 한다.   
    
![](https://user-images.githubusercontent.com/39042837/110416532-40e4ea00-80d7-11eb-92ca-910f47108837.jpeg)   
    
* 최솟값인 **1**을 찾고, 첫 번째 위치한 인덱스의 값과 교환한다.   
* **1 -> 3**의 위치로, **3 -> 1**의 위치로 **이동**   
     
![](https://user-images.githubusercontent.com/39042837/110416539-42161700-80d7-11eb-9865-0911566aa5df.jpeg)   
    
* 첫 번째 인덱스에 최솟값이 정해졌다. (정렬마침)   
    
![](https://user-images.githubusercontent.com/39042837/110416543-43dfda80-80d7-11eb-9735-67d17eb1bac7.jpeg)   
    
* **두 번째 위치 ~ 마지막 위치**의 최솟값을 찾는다.   
* 최솟값 **2**를 찾았다. 2는 두 번째 인덱스인 값과 교환한다.   
* **2 -> 3**의 위치로, **3 -> 2**의 위치로 **이동**   
     
![](https://user-images.githubusercontent.com/39042837/110416546-44787100-80d7-11eb-9531-1156dc82037e.jpeg)   
   
* 두 번째 인덱스에 최솟값이 정해졌다. (정렬마침)    
    
![](https://user-images.githubusercontent.com/39042837/110416538-42161700-80d7-11eb-8d79-77beedb36d24.jpeg)   
    
* 세 번째 위치 ~ 마지막 위치의 최솟값을 찾는다.    
* 최솟값 3을 찾았다. 현재 정렬 위치와 최솟값 3의 위치가 동일하므로 그대로 정렬을 마친다.   
     
![](https://user-images.githubusercontent.com/39042837/110416568-4b9f7f00-80d7-11eb-9529-ed97805dc877.jpeg)    
   
* 세 번째 인덱스에 최솟값이 정해졌다. (정렬마침)    
* 마지막 인덱스 정렬이 완료 될 때 까지 앞의 작업들을 계속 반복한다.    
    
### 애니메이션

선택정렬 전체 과정 애니메이션이다.

![무제](https://user-images.githubusercontent.com/39042837/110416381-fcf1e500-80d6-11eb-9d1d-e9487c8b22ec.gif)

    
## 선택정렬 - Java 코드
    
```java
public class SelectionSortTest {

    // 자리이동
    static void swap(int[] arr, int idx1, int idx2) {
        int tmp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = tmp;
    }

    // 선택정렬
    static void selectionSort(int[] arr) {

        // 마지막 자리는 자동 정렬 되므로 arr.length - 1
        for (int i = 0; i < arr.length - 1; i++) {

            // 현재 정렬할 인덱스를 최솟값으로 잡고 시작
            int min = i;

            // 정렬 대상 인덱스 다음 순서부터 배열 끝까지 비교하며 최솟값을 찾는다.
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }

            // 정렬 대상 인덱스 자리에 이미 최솟값이 있다면 넘어간다.
            if (i != min) {
                swap(arr, i, min);
            }

        }

    }

    public static void main(String[] args) {

        int[] arr = {3, 1, 2, 6, 7 , 5, 4};

        // 선택정렬
        selectionSort(arr);

        // 결과 출력
        System.out.println(Arrays.toString(arr));

    }
}
```   


## 선택정렬 특징
   
* ```장점```
  * 구현이 쉽다.   
  * 내림차순으로 정렬되어있는 요소를 오름차순으로 재정렬할 때 효율이 좋다.   
  * 비교 횟수는 많지만, **실제로 교환하는 횟수는 적다**. 교환이 많이 일어나는 자료상태라면 효율적이다.   
    * 버블정렬과 비교했을 때, 똑같은 **O(n<sup>2</sup>)** 의 시간복잡도를 갖지만,   
      시간을 측정해보면 버블정렬보다 시간이 짧게 소요됨.
   
* ```단점```   
  * 서로 떨어져 있는 요소를 교환하기 때문에 안정적이지 않다.   
    * 중복된 값이 2개 있을 때 요소의 순서가 바뀔 수 있음.   
  * 이미 정렬된 상태에서 소수의 자료가 추가된 후 재정렬 하면 비효율적이다.   
  * 시간복잡도 **O(n<sup>2</sup>)** 로 인하여 정렬 시간이 오래 걸림.
   
---

## 02. 삽입정렬 (insertion sort)

> 선택한 요소를 그보다 더 앞쪽의 이미 정렬된 배열 부분과 비교하여 알맞은 위치이 **'삽입'** 하는 작업을 반복하여 정렬   
    
1. **두 번째 요소부터 선택**하여 진행한다.   
2. 앞의 요소와 비교하며 **삽입할 위치를 찾는다**.   
   1. 두 번째 요소는 1 번째 요소와 비교   
   2. 세 번째 요소라면 1, 2 번째 요소들과 비교   
   3. 네 번째 요소라면 1, 2, 3 번째 요소들과 비교   
3. 삽입할 위치를 찾았다면, **자료를 뒤로 옮겨 해당 위치에 자료를 삽입**한다.
4. 정렬된 요소를 제외한 나머지 요소를 위와 동일하게 삽입한다. (반복)   
   
## 삽입정렬 - 예시

![삽입정렬 001](https://user-images.githubusercontent.com/39042837/110562127-4b14f000-818c-11eb-8c27-06ed2435b2b1.jpeg)   
   
* 정렬되지 않은 위의 항목들을 이용하여 선택정렬을 한다.   
    
![삽입정렬 002](https://user-images.githubusercontent.com/39042837/110562134-4cdeb380-818c-11eb-9606-1416f777622e.jpeg)   
   
* 처음 **왼쪽 끝은 이미 정렬**이 됐다고 가정하여, **두 번째 요소**부터 선택하여 정렬한다.   
* 아직 작업되지 않은 항목중 가장 왼쪽의 숫자부터 정렬 대상이 된다.   
* 앞의 정렬된 3과 비교했을 때, ```3 > 1``` 이므로 3은 한칸 뒤로 이동하고, 1은 3이 있던 자리에 **삽입**된다.   
  * **이 작업을 자신보다 작은 숫자가 나타나거나 왼쪽 끝에 도착할 때 까지 반복한다.**    
   
   
![삽입정렬 003](https://user-images.githubusercontent.com/39042837/110562138-4d774a00-818c-11eb-9bcb-aaeae83e7ee7.jpeg)   
   
* 1은 왼쪽 끝에 도달하였으므로 정렬이 완료됐다.   
   
![삽입정렬 004](https://user-images.githubusercontent.com/39042837/110562140-4e0fe080-818c-11eb-8978-b0347a78f3a4.jpeg)   
   
* 이번에는 작업되지 않은 항목 중 가장 왼쪽인 2가 정렬대상이다.   
* 2를 기준으로 왼쪽의 정렬된 모든 항목들과 비교를 한다.   
  * 바로 왼쪽 숫자인 3과 비교했을 때 ```3 > 2``` 이므로, 3은 한칸 뒤로 이동한다.   
     
![삽입정렬 005](https://user-images.githubusercontent.com/39042837/110562143-4e0fe080-818c-11eb-960b-00f880e1b6f8.jpeg)   
   
* 앞의 정렬된 1과 비교했을 때 ```1 < 2```이므로, 자신보다 작은 숫자가 나왔기 때문에 이동을 멈추고   
  해당 위치에 삽입된다.   
     
![삽입정렬 006](https://user-images.githubusercontent.com/39042837/110562144-4ea87700-818c-11eb-8943-4f5aaff381b1.jpeg)    
   
* 세 번째 위치까지 정렬 완료
     
![삽입정렬 007](https://user-images.githubusercontent.com/39042837/110562145-4f410d80-818c-11eb-9564-75bc715107e5.jpeg)     
   
* 작업되지 않은 항목 중 가장 왼쪽에 있는 **6**을 선택한다.   
* 6은 앞의 작업된 항목중 가장 오른쪽인 3보다 크다. ```3 < 6```   
  * 따라서, 이동하지 않고 원래 있던 **그 자리 그대로 정렬**이 된다.   
     
![삽입정렬 008](https://user-images.githubusercontent.com/39042837/110562149-4fd9a400-818c-11eb-9e93-33136b91bcf8.jpeg)    
    
* 네 번째 위치까지 정렬 완료   
* 앞의 작업들을 마지막 위치가 정렬될 때까지 반복하여 작업한다.   
    
### 애니메이션
   
삽입정렬 전체 과정 애니메이션이다.

![삽입정렬_애니메이션](https://user-images.githubusercontent.com/39042837/110562047-2587e680-818c-11eb-8f5e-06d1442b6847.gif)


## 삽입정렬 - Java 코드
```java
public class InsertionSortTest {

    static void insertSort(int[] arr) {

        // 첫 번째 값은 정렬이 됐다고 생각하고 두 번째 인덱스 부터 정렬 시작
       for (int i = 1; i < arr.length; i++) {

            // 삽입될 위치를 저장하기 위한 idx
            int idx = i;
            // 현재 정렬대상 값
            int tmp = arr[i];

            // 1. 이미 정렬된 배열에서 현재 정렬대상 값이 삽입될 위치(인덱스)를 찾는다.
            // 2. 현재 정렬대상 값보다 큰 값은 뒤로 한 칸식 이동된다.
            while( (idx > 0) && (arr[idx - 1] > tmp) ) {
                arr[idx] = arr[idx -1];
                idx--;
            }

            // 삽입될 위치에 tmp 삽입
            arr[idx] = tmp;
        }

    }

    public static void main(String[] args) {

        int[] arr = {3, 1, 2, 6, 7 , 5, 4};

        // 삽입정렬
        insertSort(arr);

        // 결과 출력
        System.out.println(Arrays.toString(arr));

    }
}
```   
   
## 삽입정렬 특징
   
* ```장점```
  * 구현이 쉽다.   
  * 선택정렬이나 버블정렬과 같은 **O(n<sup>2</sup>)** 알고리즘과 비교하여 빠르고, 안전한 정렬이다.   
  * 대부분의 레코드가 이미 정렬되어있을 경우 매우 효율적일 수 있다.   
    * 최선의 경우 이동없이 1번의 비교로 정렬되어 **O(n)** 시간복잡도를 갖는다.      
   
* ```단점```   
  * 많은 레코드들의 이동을 포함한다.   
  * 레코드 수가 많고 레코드 크기가 클 경우 적합하지 않다.      
  * 평균~최악의 경우 시간복잡도 **O(n<sup>2</sup>)** 로 인하여 정렬 시간이 오래 걸림.
   
---

## 03. 버블정렬(bubble sort)
   
> 이웃한 두 요소의 대소 관계를 비교하여 교환을 반복하는 정렬   
   
원소의 이동이 거품이 수면으로 올라오는 듯한 모습을 보이기 때문에 지어진 이름이다.   
   
1. **맨 끝 두 개의 요소**를 비교한다. **저울**로 비교한다고 생각. (맨 앞에서 시작한다면 반대로 생각해서 진행)   
2. 오른쪽 숫자가 작으면 왼쪽과 교환한다.   
3. 비교를 완료했으면 **저울을 한칸 왼쪽으로 이동**한다.    
4. 동일한 방법으로 숫자를 비교한다.   
5. 위의 방법을 **저울이 왼쪽 끝에 도착할 때 까지 반복**한다.   
6. 저울이 왼쪽 끝에 도착했다면 **가장 작은 숫자가 왼쪽 끝에 이동**된다.   
7. 왼쪽 끝의 숫자는 정렬을 끝낸 것으로 간주하고 **저울을 다시 오른쪽 끝**으로 이동하여 모든 숫자가 정렬될 때까지   
   1~6번을 반복한다.   
   
## 버블정렬 - 예시

![버블정렬 001](https://user-images.githubusercontent.com/39042837/110572320-83242f00-819c-11eb-9dd2-3d8beab4ad21.jpeg)   
* 정렬되지 않은 위의 항목들을 이용하여 선택정렬을 한다.   
   
![버블정렬 002](https://user-images.githubusercontent.com/39042837/110572328-84555c00-819c-11eb-858c-4d93c58f4f69.jpeg)   
* 오른쪽 맨 끝 저울을 두고 좌우 숫자를 비교한다.   
* ```5 > 4``` 이므로 둘의 순서를 변경한다.   
   
![버블정렬 003](https://user-images.githubusercontent.com/39042837/110572330-84edf280-819c-11eb-973e-b0cbaa54e110.jpeg)   
* 비교를 완료했으면 저울을 한칸 옆으로(왼쪽) 이동하여 동일한 방법으로 숫자를 비교한다.   
* ```7 > 4``` 이므로 둘의 순서를 변경한다.   
   
![버블정렬 004](https://user-images.githubusercontent.com/39042837/110572332-85868900-819c-11eb-95a3-e341fb8450e4.jpeg)   
* 비교를 완료했으면 저울을 한칸 옆으로(왼쪽) 이동하여 동일한 방법으로 숫자를 비교한다.   
* ```6 > 4``` 이므로 둘의 순서를 변경한다.    
   
![버블정렬 005](https://user-images.githubusercontent.com/39042837/110572333-861f1f80-819c-11eb-8f98-a99c3c6bb226.jpeg)   
* 비교를 완료했으면 저울을 한칸 옆으로(왼쪽) 이동하여 동일한 방법으로 숫자를 비교한다.   
* 이번에는 ```2 < 4``` 이므로 순서를 변경하지 않는다.(회색으로 표시)   


![버블정렬 006](https://user-images.githubusercontent.com/39042837/110572336-86b7b600-819c-11eb-9c46-59eeeb538566.jpeg)    
   
![버블정렬 007](https://user-images.githubusercontent.com/39042837/110572337-87504c80-819c-11eb-89cb-959940918525.jpeg)    
* 동일한 작업을 저울이 **왼쪽 끝에 도착할 때 까지 반복**한다.   
    
![버블정렬 008](https://user-images.githubusercontent.com/39042837/110572339-87504c80-819c-11eb-9d72-0bc0843cf30d.jpeg)   
* 저울이 왼쪽 끝에 도착했고, 위의 작업을 거쳐 **가장 작은 숫자가 왼쪽 끝에 이동(정렬**)됐다.   
   
![버블정렬 009](https://user-images.githubusercontent.com/39042837/110572341-87e8e300-819c-11eb-992d-8a442543beba.jpeg)    
* 다시 저울을 오른쪽 끝으로 옮겨 모든 숫자가 정렬될 때 까지 위의 작업들을 반복한다.   
   

### 애니메이션

버블정렬 전체 과정 애니메이션이다.   

![버블정렬_애나메이션](https://user-images.githubusercontent.com/39042837/110572237-65ef6080-819c-11eb-9005-665993d9999c.gif)
   
## 버블정렬 - Java 코드

```java
public class BubbleSortTest {

    // 자리이동
    static void swap(int[] arr, int idx1, int idx2) {
        int tmp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = tmp;
    }

    static void bubbleSort(int[] arr) {
        // 수행하는 패스의 횟수는 (배열길이 - 1)회. 마지막 요소는 이미 끝에 놓이기 때문이다.
        for(int i = 0; i < arr.length - 1; i++) {
            // 끝에서 부터 비교하므로 j를 배열의 마지막으로 지정
            // arr[j-1]과 arr[j]를 비교한다.
            for(int j= arr.length - 1 ; j > i; j--) {
                if(arr[j - 1] > arr[j]) {
                    // 자리이동
                    swap(arr, j -1, j);
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {3, 1, 2, 6, 7 , 5, 4};

        // 버블정렬
        bubbleSort(arr);

        // 결과 출력
        System.out.println(Arrays.toString(arr));

    }
}
```   
   
## 버블정렬 특징
   
* ```장점```
  * 구현이 매우 쉬워서 코드 자체가 직관적이다.    
   
* ```단점```   
  * 최선이든 최악이든 시간복잡도 **O(n<sup>2</sup>)** 로 인하여 정렬 시간이 오래 걸린다.   
    * 따라서, 효율적인 정렬방법으로 사용되지 않음.   
  * 하나의 요소가 끝에서 끝으로 이동하기 위해서 배열의 모든 다른 요소들과 교환되어야 한다.   
  * 특정 요소가 최종 정렬 위치에 이미 있는 경우라도 교환되는 일이 발생한다.   
    
---

## 04. 합병(병합)정렬(merge sort)   
    
> 배열을 앞부분과 뒷부분으로 나누어 각각 정렬한 다음 합병하는 작업을 반복하여 정렬   
   
합병정렬은 **안전 정렬**에 속하며, **분할 정복 알고리즘**의 한 종류이다.   

* 분할 정복 알고리즘이란?   
  * 그대로 해결할 수 없는 문제를 작은 문제로 분할하여 문제를 해결하는 방법이나 알고리즘을 뜻한다.   
  * 분할 정복 알고리즘은 보통 재귀를 통해 구현된다.   
   
합병 정렬 알고리즘의 순서는 다음과 같다.   

* **배열 요소 개수가 2개 이상인 경우** (길이가 1 이하이면 이미 정렬된 것으로 본다.)  
1. 분할 : 정렬되지 않은 배열을 **절반**으로 잘라 비슷한 크기의 **두 배열로 나눈다**.   
2. 정복 : 각 부분 배열을 **재귀**적으로 **합병 정렬**을 이용해 정렬한다.   
3. 결합 : 두 부분 배열을 다시 하나의 정렬된 배열로 **합병**한다. 이때, 정렬 결과는 임시배열에 저장된다.   
4. 복사 : 임시 배열에 저장된 결과를 원래 배열에 복사한다.   
   
## 합병정렬 - 예시

![합병정렬 001](https://user-images.githubusercontent.com/39042837/110721687-59c6da00-8254-11eb-98d9-42c1e728bf17.jpeg)   

* 정렬되지 않은 배열을 이용하여 합병정렬을 한다.   

![합병정렬 002](https://user-images.githubusercontent.com/39042837/110721691-5af80700-8254-11eb-8b19-35a88a47e7ff.jpeg)    
![합병정렬 003](https://user-images.githubusercontent.com/39042837/110721693-5b909d80-8254-11eb-9063-508af13ed02d.jpeg)     
![합병정렬 004](https://user-images.githubusercontent.com/39042837/110721695-5c293400-8254-11eb-83e7-3859f7e43ddc.jpeg)    

* 그룹 내의 숫자가 한 개가 될 때까지 계속 **반씩 분할**해 나간다.   
* 분할이 완료되면, 분할한 각 **그룹을 병합**한다. (거꾸로)   
   
![합병정렬 005](https://user-images.githubusercontent.com/39042837/110721697-5cc1ca80-8254-11eb-8603-7759d866c709.jpeg)    

* 병합할 때는 병합 후의 그룹에서 숫자가 작은 순으로 나열되도록 정렬한다.   
  * 3, 1 -> ```1, 3``` 으로 병합
  * 2, 6 은 그대로 ```2, 6``` 으로 병합
   
![합병정렬 007](https://user-images.githubusercontent.com/39042837/110721702-5df2f780-8254-11eb-9fc6-5670eb70bf84.jpeg)    

* **[1, 3]** 그룹과 **[2, 6]** 그룹을 병합할 때는 여러 숫자를 포함하기 때문에 각 그룹의 선두 숫자를   
  비교해서 **작은 숫자를 먼저 이동**한다.   
* 1과 2를 비교하면 2 > 1 이므로 **1을 이동**한다.   
   
![합병정렬 008](https://user-images.githubusercontent.com/39042837/110721703-5e8b8e00-8254-11eb-9cb2-779bf3320417.jpeg)    

* 2와 3을 비교하면 3 > 2 이므로 **2를 이동**한다.   
    
![합병정렬 009](https://user-images.githubusercontent.com/39042837/110721705-5e8b8e00-8254-11eb-8b13-7f6b64c42b88.jpeg)    
   
* 3과 6을 비교하면 6 > 3 이므로 **3을 이동**한다.   
   
![합병정렬 010](https://user-images.githubusercontent.com/39042837/110721706-5f242480-8254-11eb-8f3d-6993959b2786.jpeg)   
   
* 남은 6은 그대로 마지막 자리로 이동된다.   
* 나머지 그룹 병합 작업은 **모든 숫자가 하나의 그룹**이 될 때까지 **재귀적으로 반복**한다.   
   
### 애니메이션

합병정렬 전체 과정 애니메이션이다. 

![합병정렬](https://user-images.githubusercontent.com/39042837/110721568-271ce180-8254-11eb-8957-f3b2c0e172fb.gif)

## 합병정렬 - Java 코드

```java
public class MergeSortTest {

    static int[] buff;  //  임시 배열은 전역 변수로 지정하여 매번 buff를 새로 생성하지 않도록 한다.

    public static void mergeSort(int[] arr) {

        // 배열 크기만큼 임시 배열 생성
        buff = new int[arr.length];

        // 분할 정복을 이용한 배열 전체 합병정렬
        mergeSort(arr, 0, arr.length - 1);

    }

    private static void mergeSort(int[] arr, int left, int right) {

        // 크키가 1보다 큰 경우만 분할
        if (left < right) {

            int center = left + (right - left) / 2;  //  중간을 기점으로 균등 분할 (분할)

            mergeSort(arr, left, center);            //  배열의 앞부분을 재귀적으로 합병정렬 (정복)
            mergeSort(arr, center + 1, right);  //  배열의 뒷부분을 재귀적으로 합병정렬 (정복)
            merge(arr, left, center, right);        //  실제 합병 수행

        }
    }

    private static void merge(int[] arr, int left, int center, int right) {

        // i는 arr[left] ~ arr[right] 배열의 인덱스
        int i;
        // p는 buff에 복사한 요소의 개수
        // j는 buff의 값과 arr의 값 비교 시 buff에서 사용하는 인덱스
        int p = 0, j = 0;
        // 새로 합병될 arr의 인덱스
        int k = left;

        // 배열의 앞부분 (a[left] ~ a[center])을 buff[0] ~ buff[center - left]에 복사.
        for (i = left; i <= center; i++)
            buff[p++] = arr[i];

        // 배열의 뒷부분 (a[center + 1] ~ a[right])과 buff로 복사한 배열의 앞부분 p개를 병합하여 배열 arr에 저장
        while (i <= right && j < p)
            arr[k++] = (buff[j] <= arr[i]) ? buff[j++] : arr[i++];

        // 배열 buff에 남아 있는 요소를 배열 arr에 복사
        while (j < p)
            arr[k++] = buff[j++];

    }

    public static void main(String[] args) {
        int[] arr = {3, 1, 2, 6, 7 , 5, 4};

        // 합병정렬
        mergeSort(arr);

        // 결과 출력
        System.out.println(Arrays.toString(arr));

    }

}
```
    
### 코드 과정 설명
   
코드의 ```merge()``` 메소드 흐름을 그림으로 조금 더 자세히 살펴보자.   

![무제 001](https://user-images.githubusercontent.com/39042837/110735032-56d7e380-826c-11eb-9aa4-ec37f380b6fe.jpeg)   
   
* 처음으로 수행되는 병합과정이다.    

![무제 002](https://user-images.githubusercontent.com/39042837/110735038-58091080-826c-11eb-9b65-6cb8b858cb23.jpeg)    
   
* 배열의 앞부분 ```arr[0]```을 buff 임시 배열에 복사한다.   
* p는 복사된 개수를 의미   
    
![무제 003](https://user-images.githubusercontent.com/39042837/110735041-58a1a700-826c-11eb-875c-dd5ed3e75e2d.jpeg)    
   
* 배열의 뒷부분 ```arr[1]```과 buff로 복사한 앞부분 ```arr[0]```을 병합하여 arr 배열에 저장   
* 1과 3을 비교하면 1이 작은 숫자 이므로 arr[0]에 1이 들어간다.   
* 뒷부분 배열에 비교할 요소가 없으므로 루프를 종료한다.   
    
![무제 004](https://user-images.githubusercontent.com/39042837/110735043-593a3d80-826c-11eb-849f-e2be35aea8b0.jpeg)    
   
* buff 배열에 3이라는 요소가 남아있으모로 arr[1] 자리에 채운다.   
* 합병정렬이 완료됐다.   
    
![무제 005](https://user-images.githubusercontent.com/39042837/110735044-59d2d400-826c-11eb-9dd3-c71fed8e32c1.jpeg)   
   
* 위와 동일한 방식으로 2, 6도 합병정렬이 됐다고 가정하고 이번에는 **두 개 그룹 [1, 3]과 [2, 6]을 병합**하자.    
      
![무제 006](https://user-images.githubusercontent.com/39042837/110735048-5a6b6a80-826c-11eb-9406-e31a29a5ee69.jpeg)   
   
* 배열의 앞부분 ```arr[0] ~ arr[1]```을 buff 임시 배열에 복사한다.   
   
![무제 007](https://user-images.githubusercontent.com/39042837/110735049-5a6b6a80-826c-11eb-8ec1-154d78456500.jpeg)    
   
* 배열의 뒷부분 ```arr[2] ~ arr[3]```과 buff로 복사한 앞부분 ```arr[0] ~ arr[1]```을 병합하여 arr 배열에 저장   
* 1과 2를 비교
* 둘 중 작은 수 **1**이 ```arr[0]```에 들어간다.   
* j, k를 한칸 뒤로 이동한다.   
    
![무제 008](https://user-images.githubusercontent.com/39042837/110735052-5b040100-826c-11eb-8cdf-740b0886af6f.jpeg)    
    
* 2와 3을 비교   
* 둘 중 작은 수 **2**가 ```arr[1]```에 들어간다.   
* i, k를 한칸 뒤로 이동한다.   
    
![무제 009](https://user-images.githubusercontent.com/39042837/110735054-5b9c9780-826c-11eb-9f16-2e8e9bda5411.jpeg)    
   
* 3과 6을 비교   
* 둘 중 작은 수 **3**이 ```arr[2]```에 들어간다.   
* j, k를 한칸 뒤로 이동한다.   
* buff 배열(앞부분)에 비교할 요소가 없으므로 루프가 종료된다.    
    
![무제 010](https://user-images.githubusercontent.com/39042837/110735055-5b9c9780-826c-11eb-9398-14ad829658c2.jpeg)   
   
* 배열 buff에 **남아있는 요소가 없으므로 종료**   
* 배열 뒷부분에 남아있는 요소인 **6**은 **자동으로 해당 위치에 정렬**이 된다.   
     
## 합병정렬 특징
   
* ```장점```   
  * 시간복잡도
    * 배열의 요소가 **1개가 될 때 까지 분할** -> ```n번 호출```
    * 배열을 **반씩 분할** 해가며 정렬 -> ```logN 만큼의 시간 소요```   
    * 즉, 최종적으로 **한 번 호출당 검색할 데이터 양이 절반**이 되므로 ```O(nlogn)```의 시간복잡도를 가진다.   
  * 안정적인 정렬
  * 데이터의 분포에 영향을 덜 받는다. 입력 데이터가 무엇이든 간에 **O(nlogn)** 로 동일
  * **연결 리스트(Linked List)로 구성**하면, 링크 인덱스만 변경되므로 데이터 이동은 무시될만큼 작아짐.   
   
* ```단점```   
  * 데이터가 **배열**로 구성된 경우 **추가적인 메모리 임시 배열**(buff)이 필요하다.   
  * 데이터 크기가 큰 경우 이동 횟수가 많으므로 시간 낭비 발생

---

## 05. 셸정렬

> 삽입 정렬의 장점은 살리고 단점은 보완하여 좀 더 빠르게 정렬하는 알고리즘   
   
위에서 공부한 **삽입정렬 특징**을 간략하게 정리하자면   

* 정렬을 마쳤거나 정렬을 마친 상태에 가까우면 정렬 속도가 매우 빨라진다.(장점)   
* 삽입할 위치가 멀리 떨어져 있으면 이동해야 하는 횟수가 많아진다. (단점)   

셸정렬 알고리즘의 순서이다.   

1. 정렬할 배열의 요소를 그룹으로 나눠 각 그룹별로 삽입 정렬 수행   
2. 그 그룹을 합치면서 정렬을 반복하여 요소의 이동 횟수를 줄인다.   
3. 위의 과정을 그룹의 개수가 1이 될 때까지 반복한다.   

## 셸정렬 - 예시
   
셸 정렬에서 수행하는 각각의 정렬을 **'h-정렬'** 이라고 한다.   
그림으로 바로 살펴보자.   

![셸정렬 001](https://user-images.githubusercontent.com/39042837/110901639-fae28d00-8347-11eb-9bc2-d7fe6eac6900.jpeg)   
* 최초의 배열을 4칸만큼 떨어진 요소를 모아 **그룹 4개**로 나누어 정렬한다.   
* {8, 7}, {1, 6}, {4, 3}, {2, 5} 그룹을 정렬한다.   
* 위의 정렬 방법을 **'4-정렬'** 이라고 한다.   
* 정렬을 마친 상태는 아니지만 조금 더 정렬을 마친 상태에 가까워졌다!   
    
![셸정렬 002](https://user-images.githubusercontent.com/39042837/110901649-fd44e700-8347-11eb-85f6-c33cdba4974d.jpeg)    
* '4-정렬'을 마친 상태에서 2칸만큼 떨어진 요소를 모아 그룹 2개로로 나눈다.   
* {7, 3, 8, 4}, {3, 4, 7, 8} 그룹을 정렬한다.   
* 위의 정렬 방법을 **'2-정렬'** 이라 한다.   
   
2-정렬 까지 마치고 나면 배열은 좀 더 정렬된 상태에 가까워 진다.   
마지막으로 **'1-정렬'** 인 일반적인 **삽입정렬**을 수행한다.    
    
정리하면, 정렬되지 않은 상태의 배열에 대해 단순하게 삽입정렬을 적용하는 것이 아니라   
'4-정렬', '2-정렬' 처럼 **```조금이라도 정렬이 된 상태에 가까운 배열로 만든 다음 마지막 삽입정렬```** 을 하는 것이다.    
   
**정렬**해야하는 **횟수는 늘지만** 전체적으로 **요소 이동 횟수가 줄어들어** 효율적인 정렬을 할 수 있다.    
   
## 셸정렬 - Java 코드
```java
public class ShellSortTest {

    public static void shellSort(int[] arr) {

        // h 인덱스를 기준으로 비교 시작
        // h는 현재를 반으로 나눈 기준으로 잡았다.
        // 삽입 정렬 코드와 거의 같다. 차이점은 선택한 요소와 비교하는 요소가
        // 이웃하지 않고 h 만큼 떨어져 있다.
        for (int h = arr.length / 2; h > 0; h /= 2 ) {
            for (int i = h; i < arr.length; i++) {
                int idx = i - h;
                int tmp = arr[i];

                while( (idx >= 0) && (arr[idx] > tmp) ) {
                    arr[idx + h] = arr[idx];
                    idx -= h;
                }

                arr[idx + h] = tmp;
            }
        }
    }

    public static void main(String[] args) {

        int[] arr = {3, 1, 2, 6, 7 , 5, 4};

        shellSort(arr);

        System.out.println(Arrays.toString(arr));
    }

}
```   

## 셸정렬 특징
   
* ```장점```   
  * 연속적이지 않은 리스트의 자료 교환이 일어나면 **더 큰 거리를 이동**한다.   
    * 교환되는 요소들이 **삽입정렬보다 최종위치에 있을 가능성**이 더 높아진다.   
  * 삽입정렬의 장점은 취하고 단점을 보완해서 삽입정렬보다 성능이 좋다.   
  * 시간복잡도
    * 최선일 때는 삽입정렬과 동일한 O(n)   
    * 평균 **O(n<sup>1.5</sup>)**   
    * 최악 O(n<sup>2</sup>)
   
* ```단점```   
  * h 간격을 잘못 설정한다면 성능이 굉장히 안 좋아질수 있다. -> O(n<sup>2</sup>)   
    * 보통 전체에서 h/2를 하지만 이보다 h/3 + 1 이 더 빠르다.   


## References
* [선택정렬-위키백과](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC)
* [삽입정렬-위키백과](https://ko.wikipedia.org/wiki/%EC%82%BD%EC%9E%85_%EC%A0%95%EB%A0%AC)
* [버블정렬-위키백과](https://ko.wikipedia.org/wiki/%EA%B1%B0%ED%92%88_%EC%A0%95%EB%A0%AC)  
* [합병정렬-위키백과](https://ko.wikipedia.org/wiki/%ED%95%A9%EB%B3%91_%EC%A0%95%EB%A0%AC)
* [셸정렬-위키백과](https://ko.wikipedia.org/wiki/%EC%85%B8_%EC%A0%95%EB%A0%AC)
* https://gmlwjd9405.github.io/2017/10/01/basic-concepts-of-development-algorithm.html
* https://yabmoons.tistory.com/250
* 보요 시바타, 『자료구조와 함께 배우는 알고리즘 입문』, 이지스퍼블리싱(2018)    
* 모든 이미지는 직접 그림