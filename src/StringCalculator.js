/**
 * Created by YuliyaPshinko on 07.11.2015.
 */
function StringCalculator () {}

StringCalculator.prototype.add = function (stringNumbers) {
    return (stringNumbers.match(/[-\d]+/g) || [])
        .reduce(function (previousValue, currentValue) {
            currentValue = Number(currentValue);
            if (!Number.isInteger(currentValue) || currentValue > 1000) {
                currentValue = 0;
            } else if (currentValue < 0) {
                throw new Error('negatives not allowed');
            }
            return previousValue + currentValue;
        }, 0);
};