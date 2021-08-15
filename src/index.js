
module.exports = function toReadable (number) {

    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen',
    'seventeen','eighteen','nineteen'];
    const tens = ['twenty','thirty','forty','fifty',
    'sixty','seventy','eighty','ninety'];

    function toReadableWithoutHundreds (number) {
        if (number < 10) {
            return digits[number];
        } else if (number > 9 && number < 20) {
            return teens[number - 10];
        } else if (number % 10 == 0 && number < 100) {
            strNum = number.toString();
            dig1 = Number(strNum[0]);
            return tens[dig1 - 2];
        } else if (number > 19 && number < 100) {
            strNum = number.toString();
            dig1 = Number(strNum[0]);
            dig2 = Number(strNum[1]);
            return `${tens[dig1 - 2]} ${digits[dig2]}`;
        }
    }

    if (!number) {
        return digits[0];
    } else if (number % 100 == 0) {
        strNum = number.toString();
        dig1 = Number(strNum[0]);
        return `${digits[dig1]} hundred`;
    } else if (number > 99) {
        strNum = number.toString();
        dig1 = Number(strNum[0]);
        strNumWithoutHundreds = strNum.slice(1);
        numWithoutHundreds = Number(strNumWithoutHundreds);
        return `${digits[dig1]} hundred ${toReadableWithoutHundreds(numWithoutHundreds)}`;
    }

    return toReadableWithoutHundreds(number);
}
