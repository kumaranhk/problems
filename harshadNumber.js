var sumOfTheDigitsOfHarshadNumber = function(x) {
    let tempX = x;
    let sum = 0;
    while (tempX != 0){
        let num = tempX % 10;
        sum += num;
        tempX = Math.floor(tempX / 10);
    }
    if (x % sum === 0) return sum;
    return -1;
};

let x = 23;
console.log(sumOfTheDigitsOfHarshadNumber(x));