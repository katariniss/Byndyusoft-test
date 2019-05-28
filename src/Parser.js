function Parser() {
}

Parser.prototype.strToArrayOfNumbers = function (string) {
    if (!string) {
        return [];
    }

    var result = [];
    var buffer = '';

    for (let i = 0; i < string.length; i++) {
        const currentSymbol = string[i];

        if (currentSymbol !== ',') {
            buffer = buffer + currentSymbol;            
        } else {
            result.push(Number(buffer));
            buffer = '';
        }
    }
    result.push(Number(buffer));

    return result;
};
