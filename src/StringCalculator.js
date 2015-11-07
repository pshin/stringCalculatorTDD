/**
 * Created by YuliyaPshinko on 07.11.2015.
 */
function StringCalculator () {}

StringCalculator.prototype.add = function (stringNumbers) {
    var delimiter = stringNumbers.replace(/(^\/\/(.*)\n)/, '') && RegExp.$2;

    return stringNumbers.split(delimiter || /,|\n/g).reduce(function (previousValue, currentValue) {
        currentValue = Number(currentValue);
        if (!Number.isInteger(currentValue)) {
            currentValue = 0;
        }
        return previousValue + currentValue;
    }, 0);
};