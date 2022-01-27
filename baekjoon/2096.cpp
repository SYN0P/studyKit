#include <iostream>
using namespace std;

int maxTwo(int a, int b) {
	if (a >= b) return a;
	else return b;
}

int maxThree(int a, int b, int c) {
	if (a >= b && a >= c) return a;
	else if (b >= a && b >= c) return b;
	else return c;
}

int minTwo(int a, int b) {
	if (a <= b) return a;
	else return b;
}

int minThree(int a, int b, int c) {
	if (a <= b && a <= c) return a;
	else if (b <= a && b <= c) return b;
	else return c;
}


int main(void)
{
	cin.tie(NULL);
	ios::sync_with_stdio(false);
	
	int N;
	cin >> N;

	int max[3] { 0 };
	int min[3] { 0 };
	int temp[3] { 0 };

	int a, b, c;
	for (int i = 0; i < N; i++) {
		cin >> a >> b >> c;

		temp[0] = maxTwo(max[0], max[1]) + a;
		temp[1] = maxThree(max[0], max[1], max[2]) + b;
		temp[2] = maxTwo(max[1], max[2]) + c;
	
		max[0] = temp[0];
		max[1] = temp[1];
		max[2] = temp[2];
	
		temp[0] = minTwo(min[0], min[1]) + a;
		temp[1] = minThree(min[0], min[1], min[2]) + b;
		temp[2] = minTwo(min[1], min[2]) + c;

		min[0] = temp[0];
		min[1] = temp[1];
		min[2] = temp[2];
	}
	
	cout << maxThree(max[0], max[1], max[2]) << " " << minThree(min[0], min[1], min[2]); 
	return 0;
}