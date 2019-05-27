describe('Calculator.calculateMinsSum', function () {
    var calculator = new Calculator();

    it('returns 0 if list is empty', function () {
        var result = calculator.calculateMinsSum([]);

        expect(result).toBe(0);
    });

    it('returns number if value is a single number', function () {
        var result = calculator.calculateMinsSum([100]);

        expect(result).toBe(100);
    });

    it('returns sum of 2 min numbers in a fully valid string', function () {
        var result = calculator.calculateMinsSum([4, 0, 3, 19, 492, -10, 1]);

        expect(result).toBe(-10);
    });
});