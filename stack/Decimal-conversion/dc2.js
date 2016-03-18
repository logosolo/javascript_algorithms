function convert(num, base) {
	if (num == base) {
		return num;
	}
	var remainder,
		result = '',
		molecule = num,
		s = new stack();
	do {
		remainder = molecule % base;
		if (base == 16) {
			switch (remainder) {
				case 10:
					remainder = 'a';
					break;
				case 11:
					remainder = 'b';
					break;
				case 12:
					remainder = 'c';
					break;
				case 13:
					remainder = 'd';
					break;
				case 14:
					remainder = 'e';
					break;
				case 15:
					remainder = 'f';
					break;
			}
		}
		s.push(remainder);
		molecule = Math.floor(molecule /= base);
	} while (molecule);

	while (s.length > 0) {
		result += s.pop();
	}

	return result;
}