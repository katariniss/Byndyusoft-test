function Calculator() {
}

Calculator.prototype.calculateMinsSum = function (list) {
    if (!list.length) {
        return 0;
    }

    if (list.length === 1) {
        return list[0];
    }

    let min1 = list[0];
    let min2 = list[1];

    if (min1 > min2) {
       min2 = min1;
       min1 = list[1]; 
    }

    for (let i = 2; i < list.length; i++) {
        const currentNumber = list[i];

        if (currentNumber < min2) {
            min2 = currentNumber;

            if (min2 < min1) {
                const tmp = min1;
                
                min1 = min2;
                min2 = tmp;
            }
        }
    }

    return min1 + min2;
};