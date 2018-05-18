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
