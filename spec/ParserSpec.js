describe('Parser.strToArrayOfNumbers', function () {
    var parser = new Parser();

    it('returns [] if value is empty', function () {
        var result = parser.strToArrayOfNumbers('');

        expect(result).toBe([]);
    });

    it('returns array with a single number if value is a single number', function () {
        var result = parser.strToArrayOfNumbers('100');

        expect(result).toBe([100]);
    });
});