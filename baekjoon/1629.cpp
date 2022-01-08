#include <iostream>
using namespace std;

long long pow(int a, int b, int c) {
	if (b == 0) return 1;
	else if (b == 1) return (a % c);

	if (b % 2 == 0) {
		long long p = pow(a, b / 2, c) % c;
		return ((p % c) * (p % c)) % c;
	} else {
		long long p = pow(a, (b - 1) / 2, c) % c;
		return ((((p % c) * (p % c)) % c) * (a % c)) % c;
	}
}

int main(void)
{
	int A, B, C;

	cin.tie(NULL);
	ios::sync_with_stdio(false);

	cin >> A >> B >> C;

	long long result = pow(A, B, C);
	cout << result;

	return 0;
}