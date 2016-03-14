function convert(num, base) {
	var molecule,
		s = new stack();

	if (num % base == 0) {
		if (s.length) {
			s.push(num % base);
		}
		molecule = num / base;
	} else {
		s.push(num % base);
		molecule = Math.floor(num / base);
	}


	if (molecule > 0) {
		convert(molecule, base);
	}

}


