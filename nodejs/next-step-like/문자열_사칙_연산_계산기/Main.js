const StringCalculator = require('./StringCalculator');

function main() {
    const stringCalculator = new StringCalculator();
    const result = stringCalculator.calculator('2 + 3 * 4 / 2');
    console.log(result)
}

main();