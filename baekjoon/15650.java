import java.io.*;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] input = br.readLine().split(" ");
        int N = Integer.parseInt(input[0]);
        int M = Integer.parseInt(input[1]);

        String[] arr = new String[M];
        StringBuilder sb = new StringBuilder();
        permutation(sb, arr, N, M, 0, 1);

        bw.write(sb.toString());
        bw.flush();
    }


    static void permutation(StringBuilder sb, String[] arr, int N, int M, int depth, int before) {
        for (int i = before; i <= N; i++) {
            arr[depth] = Integer.toString(i);

            if (depth == M - 1) sb.append(String.join(" ", arr)).append("\n");
            else permutation(sb, arr, N, M, depth + 1, i + 1);
        }
    }
}