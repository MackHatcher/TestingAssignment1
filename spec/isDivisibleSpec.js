describe('Check if a number is divisible by other numbers;', function() {

    it('should return true if the number is divisible by both provided divisors', function() {
        expect(isDivisible(8, 4, 2)).toBe(true);
    });
    it('should return false if the number is smaller than the provided divisors', function() {
        expect(isDivisible(3, 6, 12)).toBe(false);
    });
    it('should return false if the number is not divisible by one of the provided divisors', function() {
        expect(isDivisible(8, 4, 3)).toBe(false);
    });
    it('should return false if the number is not divisible by both divisors', function() {
        expect(isDivisible(8, 5, 3)).toBe(false);
    });
});