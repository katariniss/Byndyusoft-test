describe('Parser.strToArrayOfNumbers', function () {
    var parser = new Parser();

    it('returns [] if value is empty', function () {
        var result = parser.strToArrayOfNumbers('');

        expect(result).toEqual([]);
    });

    it('returns array with a single number if value is a single number', function () {
        var result = parser.strToArrayOfNumbers('100');

        expect(result).toEqual([100]);
    });

    it('returns list of numbers in a fully valid string', function () {
        var result = parser.strToArrayOfNumbers('4,0,3,19,492,-10,1');

        expect(result).toEqual([4, 0, 3, 19, 492, -10, 1]);
    });

    it('returns list of numbers and NaNs', function () {
        var result = parser.strToArrayOfNumbers('true, 1,j,8,oilul,-1');

        expect(result).toEqual([NaN, 1, NaN, 8, NaN, -1]);
    });
});