function addOdd(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            sum += arr[i];
        }
    }
    return sum;
}

function sort(arr){
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length -i -1; j++){
            if (arr[j] > arr[j + 1]){
                [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]];
            }
        }
    }
    return arr;
}

function printRepeatedNum(arr){
    let repeatedNum = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if (arr[i] === arr[j] && i !== j){
            repeatedNum.push(arr[i]);
        }   
        }
    }
    console.log([... new Set(repeatedNum)].join(' '));
}

function repeatedNum(arr){
    const counts = new Map();
    const repeatedNum = [];
    
    for (let num of arr){
        counts.set(num,(counts.get(num) || 0) + 1);
        // console.log(num,counts);
    }
    for(let [num,count] of counts){
        // console.log(num,count)
        if(count > 1){
            repeatedNum.push(num);
        }
    }
    console.log(repeatedNum.join(' '));
}

function removeSpecial(str){
    splcharacters = '!@#$%^&*()_+=`~-=[]{};:"/?,.<>|';
    spl = '';
    ans = '';
    for(let i = 0; i < str.length; i++){
        if (splcharacters.split('').includes(str[i])){
            spl += str[i];
        }
        else{
            ans += str[i];
        }
    }
    return spl === '' ? -1 : ans;
    // console.log(ans,spl);
}

function removeVowels(str){
    let soln = "";
    for (let i = 0; i < str.length; i++){
        if (!['a','e','i','o','u'].includes(str[i].toLowerCase())){
            soln += str[i];
        }
    }
    return soln;
}
// console.log(removeVowels('guvi geek'));

function isPrime(num){
    // console.log(num)
    if (num == 1 || num % 2 == 0){
        // console.log('Its not a prime number',num,'first');
        return false;
    }
    for (let i = 3; i < Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
let num = 3
for (let i = num + 1; i < Infinity; i++ ){
    if(isPrime(i)){
        console.log(i);
        break;
    }
}


funciton 


const userInput = ['6','5 7 4 4 6 8'];
const arr = userInput[1].split(' ').map(Number);
// repeatedNum(arr);
// console.log(removeSpecial('XyzaBcnMk'));