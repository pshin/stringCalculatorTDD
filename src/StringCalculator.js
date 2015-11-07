/**
 * Created by YuliyaPshinko on 07.11.2015.
 */
function StringCalculator () {}

StringCalculator.prototype.add = function (stringNumbers) {
    var sum = 0;

    if (stringNumbers){
        return stringNumbers.split(',').reduce(function (previousValue, currentValue) {
            return previousValue + parseInt(currentValue, 10);
        }, 0);
    }

    return sum;
};