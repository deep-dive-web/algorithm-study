package com.janjanee.algo.datastructure;

public class TaskScheduler {
    public static int leastInterval(char[] tasks, int n) {

        // 최대 작업 숫자, 최대 작업 숫자를 가진 동일한 작업의 수 구하기
        int[] counter = new int[26];
        int max = 0;
        int maxCount = 0;
        for(char task : tasks) {
            counter[task - 'A']++;
            if(max == counter[task - 'A']) {
                maxCount++;
            }
            else if(max < counter[task - 'A']) {
                max = counter[task - 'A'];
                maxCount = 1;
            }
        }

        // ? 그룹 개수
        int partCount = max - 1;
        // ? 그룹 내의 ? 개수
        int partLength = n - (maxCount - 1);
        // ? 의 총 개수
        int emptySlots = partCount * partLength;
        // 남아있는 잔여 작업 개수
        int availableTasks = tasks.length - max * maxCount;
        // 유휴 시간 개수 (max 함수를 이용하여 idle 값이 존재하는 양수일 경우만 계산하도록 한다.)
        int idles = Math.max(0, emptySlots - availableTasks);

        // 작업의 길이 + 유휴시간
        return tasks.length + idles;
    }

}
