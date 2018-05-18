describe('Return sum of all numbers when all numbers are positive', function() {

    it('should ensure all numbers are positive', function() {
        expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
    });
    it('should discard any number that is negative', function() {
        expect(positiveSum([-4, 1, 2, 3, 4, 5])).toBe(15);
    });
    it('should return 0 if the array is empty', function() {
        expect(positiveSum([])).toBe(0);
    });
    it('should return 0 if the array is all negative numbers', function() {
        expect(positiveSum([-5, -4, -3, -2, -1])).toBe(0);
    });
});