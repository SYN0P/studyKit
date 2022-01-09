#include <iostream>
#include <string>
using namespace std;

int max(int a, int b) {
	if (a > b) return a;
	else return b;
}

int main(void)
{
	cin.tie(NULL);
	ios::sync_with_stdio(false);
	
	string A, B;
	cin >> A;
	cin >> B;

	int** arr = new int*[A.length() + 1];
	for (int i = 0; i < A.length() + 1; i++) {
		arr[i] = new int[B.length() + 1];
	}
	
	for (int i = 1; i <= A.length(); i++) {
		for (int j = 1; j <= B.length(); j++) {
			if (A.at(i - 1) == B.at(j - 1)) arr[i][j] = arr[i-1][j-1] + 1;
			else arr[i][j] = max(arr[i-1][j], arr[i][j-1]);
		}
	}
	
	string result = "";
	int i = A.length(), j = B.length();
	while (true) {
		if (arr[i][j] == 0) {
			break;
		} else if (arr[i][j] == arr[i-1][j]) {
			i--;
		} else if (arr[i][j] == arr[i][j-1]) {
			j--;
		} else {
			result = A.at(i - 1) + result;
			i--;
			j--;
		}
	}
	
	cout << result; 
	return 0;
}