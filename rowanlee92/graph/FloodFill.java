package com.janjanee.algo.graph;

public class FloodFill {

    public static int[][] floodFill(int[][] image, int sr, int sc, int newColor) {
        int start = image[sr][sc];

        if (start != newColor)
            dfs(image, sr, sc, start, newColor);

        return image;
    }

    private static void dfs(int[][] image, int sr, int sc, int start, int newColor) {
        if (image[sr][sc] == start) {
            image[sr][sc] = newColor;
            if (sc >= 1) dfs(image, sr, sc - 1, start, newColor);
            if (sr >= 1) dfs(image, sr - 1, sc, start, newColor);
            if (sc < image[0].length - 1) dfs(image, sr, sc + 1, start, newColor);
            if (sr < image.length - 1) dfs(image, sr + 1, sc, start, newColor);
        }
    }

}
