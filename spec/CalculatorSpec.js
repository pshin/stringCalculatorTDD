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

    describe('should count of unknown amount of numbers', function () {
        it('should count sum of "1,2,3" as 6', function () {
            expect(calculator.add('1,2,3')).toEqual(6);
        });
        it('should count sum of "2,3,5" as 10', function () {
            expect(calculator.add('2,3,5')).toEqual(10);
        });
    });

    describe('should handle new lines', function () {
        it('should count sum "1\n2,3" as 6', function () {
            expect(calculator.add('1\n2,3')).toEqual(6);
        });
    });

    describe('should support different delimitters', function () {
        it('should count sum "//;\n5;6" as 11', function () {
            expect(calculator.add('//;\n5;6')).toEqual(11);
        });
    });

    describe('calling add with negative numbers throw exception', function () {
        it('should check that "//;\n5;-6" throw exception', function () {
            expect(calculator.add.bind(null, '//;\n5;-6')).toThrow();
        });
    });

    describe('numbers bigger than 1000 should be ignored', function () {
        it('should count sum "//;\n5;1000" as 5', function () {
            expect(calculator.add('//;\n5;1001')).toEqual(5);
        });
    });

    describe('delimiters can be of any length', function () {
        it('should count sum "//[***]\n1***2***3" as 6', function () {
            expect(calculator.add('//[***]\n1***2***3')).toEqual(6);
        });
    });

    describe('allow multiple delimitters', function () {
        it('should count sum "//[*][%]\n1*2%3" as 6', function () {
            expect(calculator.add('//[*][%]\n1*2%3')).toEqual(6);
        });
    });

    describe('make sure you can also handle multiple delimiters with length longer than one char', function () {
        it('should count sum "//[***][%%]\n1***2%%3" as 6', function () {
            expect(calculator.add('//[***][%%]\n1***2%%3')).toEqual(6);
        });
    });

});