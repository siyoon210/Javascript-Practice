const StringCalculator = function () {
    function calculator(string) {
        const split = string.split(' ');
        const plus = Function(`num1`, `num2`, `return num1 + num2`);
        const minus = Function(`num1`, `num2`, `return num1 - num2`);
        const multiply = Function(`num1`, `num2`, `return num1 * num2`);
        const divide = Function(`num1`, `num2`, `return num1 / num2`);

        let result = parseInt(split[0]);
        for (let i = 1; i < split.length; i += 2) {
            const operator = split[i];
            const num2 = parseInt(split[i + 1]);
            if (operator === '+') {
                result = plus(result, num2);
            } else if (operator === '-') {
                result = minus(result, num2);
            } else if (operator === '*') {
                result = multiply(result, num2);
            } else if (operator === '/') {
                result = divide(result, num2);
            }
        }
        return result
    }

    return {
        calculator
    }
}

module.exports = StringCalculator