#include <iostream>
#include <string>
#include <math.h> 
#include <vector>
using namespace std;

vector<int> arr;
int minCount = 2100000000;
string result = "";

void simulation(int X, int count)
{
	if (count >= minCount)
		return;
	
	arr.push_back(X);

	if (X == 1)
	{
		if (count < minCount) {
			minCount = count;
			
			result = "";
			for (int i = 0; i < arr.size(); i++) {
				result += (to_string(arr[i]) + " ");
			}
		}
		
		arr.pop_back();
		return;
	}

	if (X % 3 == 0)
		simulation(X / 3, count + 1);
	if (X % 2 == 0)
		simulation(X / 2, count + 1);
	simulation(X - 1, count + 1);

	arr.pop_back();
}
int main(void)
{
	int X;

	cin.tie(NULL);
	ios::sync_with_stdio(false);

	cin >> X;

	simulation(X, 0);

	cout << minCount << "\n" << result;

	return 0;
}