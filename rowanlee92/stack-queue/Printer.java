package com.janjanee.algo.datastructure;

import java.util.Comparator;
import java.util.PriorityQueue;

public class Printer {

    public int solution(int[] priorities, int location) {
        int answer = 1;

        // 우선순위 큐 생성 (최대 힙으로)
        PriorityQueue<Integer> pq = new PriorityQueue<>(Comparator.reverseOrder());

        // 우선순위 큐에 데이터 삽입
        for (int priority : priorities) {
            pq.add(priority);
        }

        // 큐가 빌 때 까지 순환
        while (!pq.isEmpty()) {
            // 주어진 배열 순환
            for (int i = 0; i < priorities.length; i++){
                // 배열의 값이 큐의 peek()와 같을 때
                if (priorities[i] == pq.peek()) {
                    // 현재 인덱스와 location이 같으면 찾는 값
                    if (i == location){
                        return answer;
                    }
                    // 큐에서 삭제
                    pq.poll();
                    answer++;
                }
            }
        }

        return answer;
    }

}
