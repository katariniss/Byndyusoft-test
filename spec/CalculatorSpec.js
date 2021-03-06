describe('Calculator.calculateMinsSum', function () {
    const calculator = new Calculator();

    it('returns 0 if list is empty', function () {
        const result = calculator.calculateMinsSum([]);

        expect(result).toBe(0);
    });

    it('returns number if value is a single number', function () {
        const result = calculator.calculateMinsSum([100]);

        expect(result).toBe(100);
    });

    it('returns sum if list contains 2 descending numbers', function () {
        const result = calculator.calculateMinsSum([5, 3]);

        expect(result).toBe(8);
    });

    it('returns sum if list contains 2 ascending numbers', function () {
        const result = calculator.calculateMinsSum([3, 5]);

        expect(result).toBe(8);
    });

    it('returns sum of 2 min numbers in a fully valid string (with 0)', function () {
        const result = calculator.calculateMinsSum([4, 0, 3, 19, 492, -10, 1]);

        expect(result).toBe(-10);
    });

    it('returns sum of 2 min numbers in a fully valid string', function () {
        const result = calculator.calculateMinsSum([4, -1, 3, 19, 492, -10, 1]);

        expect(result).toBe(-11);
    });

    it('returns 0 if list contains 1 element which is not a number', function () {
        const result = calculator.calculateMinsSum(['test']);

        expect(result).toBe(0);
    });

    it('returns 0 if list contains no numbers', function () {
        const result = calculator.calculateMinsSum(['test', true, undefined, false, null, NaN]);

        expect(result).toBe(0);
    });

    it('returns sum of min numbers if list contains not only numbers', function () {
        const result = calculator.calculateMinsSum(['test', 2, true, undefined, -1, false, null, NaN]);

        expect(result).toBe(1);
    });

    it('returns a number if list contains 1 number and other stuff', function () {
        const result = calculator.calculateMinsSum(['test', 2, true, undefined, false, null, NaN]);

        expect(result).toBe(2);
    });

    it('returns sum of min numbers if list contains 3 numbers at the beginning and other stuff', function () {
        const result = calculator.calculateMinsSum([2, 1, 3, 'test', true, undefined, false, null, NaN]);

        expect(result).toBe(3);
    });

    it('order dependent case with 3 numbers and NaNs', function () {
        const result = calculator.calculateMinsSum([NaN, 1, NaN, 8, NaN, -1]);

        expect(result).toBe(0);
    });
});