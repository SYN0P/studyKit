import java.io.*;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String[] input = br.readLine().split(" ");
        int N = Integer.parseInt(input[0]);
        int K = Integer.parseInt(input[1]);

        Queue<Node> queue = new LinkedList<>();
        queue.add(new Node(N, 1));

        int[] minTime = new int[100001];
        while (!queue.isEmpty()) {
            Node node = queue.poll();

            if (minTime[node.pos] > 0) continue;
            minTime[node.pos] = node.time;
            if (node.pos == K) break;

            if (node.pos + 1 <= 100000) queue.add(new Node(node.pos + 1, node.time + 1));
            if (node.pos - 1 >= 0) queue.add(new Node(node.pos - 1, node.time + 1));
            if (node.pos * 2 <= 100000) queue.add(new Node(node.pos * 2, node.time + 1));
        }

        bw.write(Integer.toString(minTime[K] - 1));
        bw.flush();
    }
}

class Node {
    public int pos;
    public int time;

    public Node(int pos, int time) {
        this.pos = pos;
        this.time = time;
    }
}