const operators = require('./Operators')

const StringCalculator = function () {
    function calculator(string) {
        const chars = string.split(' ');

        let result = parseInt(chars[0]);
        for (let i = 1; i < chars.length; i += 2) {
            const operator = operators[chars[i]];
            const num2 = parseInt(chars[i + 1]);
            result = operator(result, num2);
        }
        return result
    }

    return {
        calculator
    }
}

module.exports = StringCalculator