var compose = function(functions) {
    
    return function(x) {
        for (let fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
};

let functions = [x => x + 1, x => x * x, x => 2 * x];
let x = 4;
const fn = compose(functions)
console.log(fn(x));
