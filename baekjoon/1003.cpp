#include <iostream>
using namespace std;

void solution(int N) {
	int *zero = new int[N + 1];
	int *one = new int[N + 1];
	
	zero[0] = 1;
	zero[1] = 0;
	
	one[0] = 0;
	one[1] = 1;
	
	for (int i = 2; i <= N; i++) {
		zero[i] = zero[i - 2] + zero[i - 1];
		one[i] = one[i - 2] + one [i - 1];
	}
	
	cout << zero[N] << " " << one[N] << "\n";
}

int main(void)
{
	int T, N;

	cin.tie(NULL);
	ios::sync_with_stdio(false);

	cin >> T;
	for (int i = 0; i < T; i++) {
		cin >> N;
		solution(N);
	}

	return 0;
}