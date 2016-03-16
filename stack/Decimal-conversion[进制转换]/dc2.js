function convert(num, base) {
	if (base < 2 && base > 10) {
		return;
	}

	var result = '',
		molecule = num,
		s = new stack();

	do {
		s.push(molecule % base);
		molecule = Math.floor(molecule /= base);
	} while (molecule);

	while (s.length > 0) {
		result += s.pop();
	}

	return result;
}