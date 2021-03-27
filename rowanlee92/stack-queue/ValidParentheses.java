package com.janjanee.algo.datastructure;

import java.util.Stack;

public class ValidParentheses {

    public static boolean isValid (String s) {

        // 직전 문자열을 저장할 임시 String
        String tmp = "";

        // 직전 문자열과 변경한 문자열이 같을 때까지(더 이상 변경이 일어나지 않을 때까지) 루프
        while (!tmp.equals(s)) {
            tmp = s;

            // (), [], {} 제거
            s = s.replace("()", "")
                    .replace("[]", "")
                    .replace("{}","");
        }

        // 길이가 0 이상이면 false, 아니면 true
        return s.length() <= 0;
    }

    public static boolean isValidSolution (String s) {
        Stack<Character> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(')
                stack.push(')');
            else if (c == '{')
                stack.push('}');
            else if (c == '[')
                stack.push(']');
            else if (stack.isEmpty() || stack.pop() != c)
                return false;
        }

        return stack.isEmpty();
    }

}
