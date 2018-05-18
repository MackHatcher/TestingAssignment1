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

describe('the returned answer ', function() {
    it('should take in a number', function() {
        expect(reverseSeq(5)).toEqual([5, 4, 3, 2, 1]);
    });
    it('should not accept a negative number', function() {
        expect(reverseSeq(-5)).toEqual([]);
    });
    it('should not accept 0 as an argument', function() {
        expect(reverseSeq(0)).toEqual([]);
    });
});

describe('The string', function() {
    it('should return itself if the string is only 1 character long', function() {
        expect(solution('h')).toBe('h');
    })
    it('should reverse the string in reverse if the string contains multiple characters', function() {
        expect(solution("hello")).toBe("olleh");
    })
    it('should return an empty string when an empty string is provided', function() {
        expect(solution('')).toBe('');
    })
});
