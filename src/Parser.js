function Parser() {
}

Parser.prototype.strToArrayOfNumbers = function (value) {
    if (!value) {
        return [];
    }

    return [Number(value)];
};