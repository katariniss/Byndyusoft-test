describe('Calculator.calculateMinsSum', function () {
    var calculator = new Calculator();

    it('returns 0 if value is empty', function () {
        var result = calculator.calculateMinsSum('');

        expect(result).toBe(0);
    });

    it('returns number if value is a single number', function () {
        var result = calculator.calculateMinsSum('100');

        expect(result).toBe(100);
    });
});