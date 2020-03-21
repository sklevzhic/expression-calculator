function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    if (expr.split("(").length !== expr.split(")").length) {
        throw new Error("ExpressionError: Brackets must be paired.");
    }
    if (expr.includes('/ 0') === true ) {
        throw new Error("TypeError: Division by zero.");
    }

    



}

module.exports = {
    expressionCalculator
}