import java.io.*;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] input = br.readLine().split(" ");
        int N = Integer.parseInt(input[0]);
        int M = Integer.parseInt(input[1]);

        String[] numbersInput = br.readLine().split(" ");
        int[] numbers = new int[numbersInput.length];
        for(int i = 0; i < numbersInput.length; i++) {
            numbers[i] = Integer.parseInt(numbersInput[i]);
        }
        Arrays.sort(numbers);

        String[] arr = new String[M];
        StringBuilder sb = new StringBuilder();
        permutation(sb, arr, N, M, numbers, 0, 0);

        bw.write(sb.toString());
        bw.flush();
    }


    static void permutation(StringBuilder sb, String[] arr, int N, int M, int[] nums, int depth, int before) {
        numsLoop:
        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < depth; j++) {
                if (arr[j].equals(Integer.toString(nums[i]))) continue numsLoop;
            }
            arr[depth] = Integer.toString(nums[i]);

            if (depth == M - 1) sb.append(String.join(" ", arr)).append("\n");
            else permutation(sb, arr, N, M, nums, depth + 1, i + 1);
        }
    }
}
