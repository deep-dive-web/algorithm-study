package com.janjanee.algo.sorting;

import java.util.Arrays;

public class ValidAnagram {

    public static boolean isAnagram(String s, String t) {

        // 길이가 다르면 false 리턴
        if (s.length() != t.length())
            return false;

        // char 배열로 변환
        char[] sArr = s.toCharArray();
        char[] tArr = t.toCharArray();

        // char 배열 정렬
        Arrays.sort(sArr);
        Arrays.sort(tArr);

        // 비교 결과 리턴
        return Arrays.equals(sArr, tArr);
    }

    public static boolean isAnagram2(String s, String t) {

        // 길이가 다르면 false 리턴
        if (s.length() != t.length())
            return false;

        // 알파벳 개수 만큼 counter 배열 생성 (a~z)
        int[] counter = new int[26];

        // s의 길이만큼 순회하여 counter 배열에 각 문자열의 알파벳 자리에
        // s일 땐 +1 t일땐 -1을 넣는다.
        for (int i = 0; i < s.length(); i++) {
            counter[s.charAt(i) - 'a']++;
            counter[t.charAt(i) - 'a']--;
        }

        // s와 t가 같은 문자열이라면 배열의 값은 모두 0이어야 함.
        // 아닐 경우 false 리턴
        for (int count : counter) {
            if (count != 0)
                return false;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram"));
        System.out.println(isAnagram("rat", "car"));
    }

}
