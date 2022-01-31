import java.io.*;
import java.util.*;

public class Main {
    public static void main(String args[]) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        String input = br.readLine();
        String sub = br.readLine();

        Deque<StringBuilder> deque = new ArrayDeque<>();
        StringBuilder remain = new StringBuilder();
        for (int i = 0; i < input.length(); i++) {
            char str = input.charAt(i);
            if (str == sub.charAt(0)) {
                if (sub.length() > 1) {
                    StringBuilder sb = new StringBuilder();
                    sb.append(str);
                    deque.addLast(sb);
                }
            } else if (deque.size() > 0) {
                StringBuilder sb = deque.peekLast();
                if (str == sub.charAt(sb.length())){
                    sb.append(str);
                    if (sb.length() == sub.length()) deque.removeLast();
                }
                else {
                    StringBuilder totalStringBuilder = new StringBuilder();
                    while (deque.size() > 0) {
                        totalStringBuilder.append(deque.removeFirst().toString());
                    }
                    totalStringBuilder.append(str);
                    remain.append(totalStringBuilder.toString());
                }
            } else {
                remain.append(str);
            }
        }

        StringBuilder totalStringBuilder = new StringBuilder();
        while (deque.size() > 0) {
            totalStringBuilder.append(deque.removeFirst().toString());
        }
        remain.append(totalStringBuilder.toString());

        String result = remain.toString();
        if (result.length() > 0)  bw.write(remain.toString());
        else bw.write("FRULA");
        bw.flush();
    }
}