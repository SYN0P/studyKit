#include <iostream>
using namespace std;

int N, num;

int main(int argc, char* argv[]) {
	cin.tie(NULL);
	ios::sync_with_stdio(false);
	
	cin >> N;

	int* arr = new int[10001];
	for (int i = 0; i < N; i++) {
		cin >> num;
		arr[num] += 1;
	}
	
	for (int i = 1; i <= 10000; i++) {
		for (int j = 0; j < arr[i]; j++) {
			cout << i << "\n";
		}
	}

	return 0;
}