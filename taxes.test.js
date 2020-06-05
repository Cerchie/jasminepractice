it('should calculate high-bracket', function () {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(100000)).toEqual(25000);
});
it('should calculate low-bracket', function () {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
    expect(calculateTaxes(0)).toEqual(0);

});