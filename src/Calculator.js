function Calculator() {
}

Calculator.prototype.calculateMinsSum = function (list) {
    if (!list.length) {
        return 0;
    }

    let min = list[0];

    for (let i = 0; i < list.length; i++) {
        const currentNumber = list[i];

        if (currentNumber < min) {
            min = currentNumber;
        }
    }
    
    return min;
};