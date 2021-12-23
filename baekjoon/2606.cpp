#include <iostream>
using namespace std;

int countComputer, countEdge;
bool* connected;
bool* visited;


void go(int pos) {
	if (visited[pos] == true) return;
	
	visited[pos] = true;

	for (int i = pos * countComputer; i < (pos * countComputer) + countComputer; i++) {
		if (connected[i] == true) {
			go(i % countComputer);
		}
	}
}

int main(int argc, char* argv[]) {
	cin >> countComputer >> countEdge;
	
	connected = new bool[(countComputer) * (countComputer)];
	visited = new bool[countComputer];
	
	for (int i = 0; i < countEdge; i++) {
		int a, b;
		cin >> a >> b;
		
		a--;
		b--;
		
		connected[a * countComputer + b] = true;
		connected[b * countComputer + a] = true;
	}

	go(0);
	
	int sum = -1;
	for (int i = 0; i < countComputer; i++) {
		if (visited[i] == true) sum++;
	}
	
	cout << sum;
	return 0;
}