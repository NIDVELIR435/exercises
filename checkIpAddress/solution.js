function isValidIP(str) {
    const split = str.split('.');
    if (split.length != 4)
        return false;

    return split.every((octet) => {
        if (!/^\d+$/.test(octet)) {
            return false;
        }

        if (octet[0] === '0' && octet.length > 1) {
            return false;
        }

        const number = parseInt(octet, 10);
        return Number.isInteger(number) && number >= 0 && number <= 255
    })
}

console.log("0.0.0.0", isValidIP("0.0.0.0"), true);
console.log("12.255.56.1", isValidIP("12.255.56.1"), true);
console.log("137.255.156.100", isValidIP("137.255.156.100"), true);
console.log('', isValidIP(''), false);
console.log('abc.def.ghi.jkl', isValidIP('abc.def.ghi.jkl'), false);
console.log('123.456.789.0', isValidIP('123.456.789.0'), false);
console.log('12.34.56', isValidIP('12.34.56'), false);
console.log('01.02.03.04', isValidIP('01.02.03.04'), false);
console.log('256.1.2.3', isValidIP('256.1.2.3'), false);
console.log('1.2.3.4.5', isValidIP('1.2.3.4.5'), false);
console.log('123,45,67,89', isValidIP('123,45,67,89'), false);
console.log('1e0.1e1.1e2.2e2', isValidIP('1e0.1e1.1e2.2e2'), false);
console.log(' 1.2.3.4', isValidIP(' 1.2.3.4'), false);
console.log('1.2.3.4 ', isValidIP('1.2.3.4 '), false);
console.log('12.34.56.-7', isValidIP('12.34.56.-7'), false);
console.log('1.2.3.4\n', isValidIP('1.2.3.4\n'), false);
console.log('\n1.2.3.4', isValidIP('\n1.2.3.4'), false);
