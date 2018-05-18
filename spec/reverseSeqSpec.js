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