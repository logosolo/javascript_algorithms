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

    while(molecule){
        s.push(num % base);	
        molecule = Math.floor(molecule /= base);
    }

}

function mulBase(num, base){
    var s = new stack(),
        converted = "";
    do{
        s.push(num % base);
        num = Math.floor(num /= base);

    }while(num > 0);

    while(s.length > 0){
        converted += s.pop();
    }

    return converted;
}

