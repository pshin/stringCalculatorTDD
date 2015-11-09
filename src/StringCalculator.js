/**
 * Created by YuliyaPshinko on 07.11.2015.
 */
function StringCalculator () {}

StringCalculator.prototype.add = function (stringNumbers) {
    stringNumbers = stringNumbers.replace(/(^\/\/\[?(.*)]?\n)/, '');

    var delimitter = RegExp.$2;

    if (delimitter.match(/\[|]/g)) {
        delimitter
            .split(/\[|]/)
            .forEach(function (element) {
                while (element && stringNumbers.indexOf(element) !== -1) {
                    stringNumbers = stringNumbers.replace(element, ',');
                }
            });

        delimitter = false;
    }

    return stringNumbers
        .split(delimitter || /,|\n/g)
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