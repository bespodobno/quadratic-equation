module.exports = function solveEquation(equation) {
    let reg = /(-?\s?\d+)/g
    let numbersWithSign = equation.match(reg);
    let numbersWithoutSpace = numbersWithSign.map(number=>number.replace(" ",""));
    let finalNumbers = numbersWithoutSpace.filter((str,index)=>index!==1);

    var discriminant = finalNumbers[1]*finalNumbers[1] - 4*finalNumbers[0]*finalNumbers[2];

    var arr = [];
    arr.push(Math.round((-finalNumbers[1] + Math.sqrt(discriminant))/(2*finalNumbers[0])));
    arr.push((Math.round(-finalNumbers[1] - Math.sqrt(discriminant))/(2*finalNumbers[0])));

return arr.sort(compareNumeric);
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}
