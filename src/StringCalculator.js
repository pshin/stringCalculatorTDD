/**
 * Created by YuliyaPshinko on 07.11.2015.
 */
function StringCalculator () {}

StringCalculator.prototype.add = function (stringNumbers) {
    return stringNumbers.replace(/(^\/\/\[?([^\]]*)]?\n)/, '')
        .split(RegExp.$2 || /,|\n/g)
        .reduce(function (previousValue, currentValue) {
            currentValue = Number(currentValue);
            if (!Number.isInteger(currentValue) || currentValue > 1000) {
                currentValue = 0;
            }
            if (currentValue < 0) {
                throw new Error('negatives not allowed');
            }
            return previousValue + currentValue;
        }, 0);
};