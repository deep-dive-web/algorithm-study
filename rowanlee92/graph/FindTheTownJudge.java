package com.janjanee.algo.graph;

public class FindTheTownJudge {
    public int findJudge(int N, int[][] trust) {
        int[] ctr = new int[N + 1];

        for (int[] t : trust) {
            ctr[t[0]]--;
            ctr[t[1]]++;
        }

        for (int i = 1; i < ctr.length; i++) {
            if (ctr[i] == (N - 1)) return i;
        }

        return -1;
    }
}
