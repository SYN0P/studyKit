import java.io.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());

        int[] result = { 0, 0, 0 };
        for (int i = 0; i < N; i++ ) {
            String[] input = br.readLine().split(" ");
            int currentRed = Integer.parseInt(input[0]);
            int currentGreen = Integer.parseInt(input[1]);
            int currentBlue = Integer.parseInt(input[2]);

            int nextRed = currentRed + Math.min(result[1], result[2]);
            int nextGreen = currentGreen + Math.min(result[0], result[2]);
            int nextBlue = currentBlue + Math.min(result[0], result[1]);

            result[0] = nextRed;
            result[1] = nextGreen;
            result[2] = nextBlue;
        }

        bw.write(Integer.toString(Math.min(Math.min(result[0], result[1]), result[2])));
        bw.flush();
    }
}
