describe('calTaxes tests', function () {
    it('should calculate high-bracket', function () {
        expect(calculateTaxes(50000)).toEqual(12500);
        expect(calculateTaxes(100000)).toEqual(25000);
    })
    it('should calculate low-bracket', function () {
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(20000)).toEqual(3000);
        expect(calculateTaxes(0)).toEqual(0);

    })
    it('should reject inval incomes', function () {
        expect(() => calculateTaxes('asdsad')).toThrowError();
        expect(() => calculateTaxes([])).toThrowError();
        expect(() => calculateTaxes(true)).toThrowError();
    })
});

describe('removeDupes tests', function () {
    it('should remove duplicates from an arr',
        function () {
            expect(removeDupes([1, 1, 2, 2, 3, 4])).toEqual([1, 2, 3, 4])
            expect(removeDupes([1, 2, 3])).toEqual([1, 2, 3])
            expect(removeDupes([1, 2, 3])).toBeInstanceOf(Array)
        });
    it('should remove duplicates from a string',
        function () {
            expect(removeDupes('hello')).toBe('helo');
            expect(removeDupes('hello')).toBeInstanceOf(String);
        });
})

describe('remove val from arr tests', function () {
    it('should remove val from arr', function () {
        expect(remove([1, 2, 3, 4, 5, 6], 6)).not.toContain(6)
    });
})

describe('saves long username', function () {
    it('saves input val to usernames arr', function () {
        nameInput.value = 'I am a panda lover 567';
        submitForm();
        expect(usernames.length).toEqual(1);
        expect(usernames).toContain('I am a panda lover 567');

    });
});

afterEach(function () {
    nameInput.value = '';
    usernames = [];
})

beforeEach(() => {
    console.log('before')
})

afterAll(() => {
    console.log('after all')
})