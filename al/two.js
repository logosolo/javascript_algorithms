function rand5() {
	return Math.floor(Math.random() * 5) + 1;
}

function rand2() {
	var temp;
	do {
		temp = rand5();
	} while (temp > 2);

	return temp;
}

function rand7() {
	var temp;
	do {
		temp = (rand2() - 1) << 2;
		temp += (rand2() - 1) << 1;
		temp += rand2() - 1;
	} while (temp == 0);

	return temp;
}