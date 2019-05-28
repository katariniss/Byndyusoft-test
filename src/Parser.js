function Parser() {
}

Parser.prototype.strToArrayOfNumbers = function (string) {
    const result = [];

    if (!string) {
        return result;
    }
    
    let buffer = '';

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
