//1299. Replace Elements with Greatest Element on Right Side

var replaceElements = function(arr) {
        let max = -1;
        for (let i = arr.length - 1; i >= 0; i--){
            let current = arr[i];
            arr[i] = max;
            if (current > max){
                max = current;
            }
        }
        return arr;
};
let arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));