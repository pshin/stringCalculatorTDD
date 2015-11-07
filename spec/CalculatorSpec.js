/**
 * Created by YuliyaPshinko on 07.11.2015.
 */
describe('string calculator', function () {
    var calculator;

    beforeEach(function () {
        calculator = new StringCalculator();
    });

    it('should count sum of empty string as 0', function () {
        expect(calculator.add('')).toEqual(0);
    });

    it('should count sum of "1" as 1', function () {
        expect(calculator.add('1')).toEqual(1);
    });

    it('should count sum of "1,2" as 3', function () {
        expect(calculator.add('1,2')).toEqual(3);
    });

});