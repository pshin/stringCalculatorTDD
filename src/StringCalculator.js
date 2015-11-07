/**
 * Created by YuliyaPshinko on 07.11.2015.
 */
function StringCalculator () {}

StringCalculator.prototype.add = function (stringNumbers) {
    return stringNumbers.split(',').reduce(function (previousValue, currentValue) {
        return previousValue + Number(currentValue);
    }, 0);
};