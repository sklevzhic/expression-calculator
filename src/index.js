function eval() {
    // Do not use eval!!!
    return;
}



function expressionCalculator(expr) {
    expr = expr.replace(/\s/g, '').replace(/(\*|\/|\+|\-)/g, ' $& ');
    let openBracket = 0, closeBracket = 0;

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === '(') {
            openBracket += 1;
        }
        if (expr[i] == ')') {
            closeBracket += 1;
        }
    }
    if (openBracket !== closeBracket) {
        throw new Error("ExpressionError: Brackets must be paired.");
    }

    let brackets;

    while (openBracket > 0) {
        if ((brackets = expr.match(/(\([0-9\+\/\*\-. ]+\))/g)) !== null) {
            for (let i = 0; i < brackets.length; i++) {
                let str = brackets[i].replace('(', '').replace(')', '');
                expr = expr.replace(brackets[i], calculate(str));
            }
        }
        openBracket -= 1;
    }
    return calculate(expr);


    function calculate(expr) {
        let arr = expr.split(' ');
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "*") {
                arr[i] = binaryOperation("*",arr[i - 1],arr[i + 1]);
                arr.splice(i - 1, 1);
                arr.splice(i, 1);
                i -= 1;
            }
            if (arr[i] === "/") {
                arr[i] = binaryOperation("/",arr[i - 1],arr[i + 1]);
                arr.splice(i - 1, 1);
                arr.splice(i, 1);
                i -= 1;
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "+") {
                arr[i] = binaryOperation("+",arr[i - 1],arr[i + 1]);
                arr.splice(i - 1, 1);
                arr.splice(i, 1);
                i -= 1;
            }
            if (arr[i] === "-") {
                arr[i] = binaryOperation("-",arr[i - 1],arr[i + 1]);
                arr.splice(i - 1, 1);
                arr.splice(i, 1);
                i -= 1;
            }
        }
        return Number(arr[0]);
    }
    
        function binaryOperation(ch, op1, op2) {
            switch (ch) {
                case '*':{
                    return Number(op1) * Number(op2);
                }
                case '/': {
                    if(op2 == 0) throw new Error('TypeError: Division by zero.');
                    return Number(op1) / Number(op2);
                }
                    case '+':{
                    return Number(op1) + Number(op2);
                }
                    case '-': {
                    return Number(op1) - Number(op2);
                }
            }
        }
}

module.exports = {
    expressionCalculator
}