function Calculator() {
}

Calculator.prototype.calculateMinsSum = function (list) {
    if (!list.length) {
        return 0;
    }

    let min1;
    let min2;

    for (let i = 0; i < list.length; i++) {
        const currentNumber = list[i];

        if (isNotNumber(currentNumber)) {
            continue;
        }

        if (typeof min2 === 'undefined') {
            min2 = currentNumber;
            continue;
        }

        if (typeof min1 === 'undefined') {
            min1 = currentNumber;
            continue;
        }

        if (currentNumber < min2) {
            min2 = currentNumber;

            if (min2 < min1) {
                const tmp = min1;

                min1 = min2;
                min2 = tmp;
            }
        }
    }

    if (typeof min1 === 'undefined') {
        return typeof min2 === 'undefined'
            ? 0
            : min2;
    }

    return min1 + min2;
};

function isNotNumber(n) {
    if (typeof n !== 'number') {
        return true;
    }

    return isNaN(n);
}