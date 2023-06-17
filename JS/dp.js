// 动态规划油管练习代码 
// 原视频： https://www.youtube.com/watch?v=oBt53YbR9Kk&t=4291s

// 例子一 斐波那契数列 递归树与动态规划
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}
// // test
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(50));

// 例子二 gridTraveler(m, n)
const gridTraveler = (m ,n, memo = {}) =>{
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n -1, memo);
    return memo[key];
}
// // test
// console.log(gridTraveler(1,1)); // 1
// console.log(gridTraveler(2,3)); // 3
// console.log(gridTraveler(3,2)); // 3
// console.log(gridTraveler(3,3)); // 6
// console.log(gridTraveler(18,18)); // 2333606220

// 例子三 canSum(targetSum, numbers)
const canSum = (targetSum, numbers, memo={}) => {
    // base case
    if (targetSum in memo) return memo[targetSum]; // utilize the memoization
    if (targetSum === 0) return true; 
    if (targetSum < 0) return false; 
    
    // recursion branch
    for(let num of numbers){
        const remainder = targetSum - num; 
        if(canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true; // store the result in memo
            return true;
        }
    }

    memo[targetSum] = false; // store the result in memo
    return false;
}
// // test
// console.log(canSum(7, [2,3])); // true
// console.log(canSum(7, [5,3,4,7])); // true
// console.log(canSum(7, [2,4])); // false
// console.log(canSum(8, [2,3,5])); // true
// console.log(canSum(300, [7,14])); // false

// 例子四 howSum(targetSum, numbers)
const howSum = (targetSum, numbers, memo={}) => {
    // base case
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    // recursion branch
    for(num of numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder,numbers, memo);
        if(remainderResult != null){
            memo[remainder] = [ ...remainderResult, num]; // [ ...Arr,num] means copy Arr into [] and add num in the end
            return memo[remainder];
        }
    }

    memo[targetSum] = null;
    return null;
}

// // test
// console.log(howSum(7, [2,3])); // [3,2,2]
// console.log(howSum(7, [5,3,4,7])); // [4,3]
// console.log(howSum(7, [2,4])); // null
// console.log(howSum(8, [2,3,5])); // [2,2,2,2]
// console.log(howSum(300, [7,14])); // null

// 例子五 bestSum(targetSum, numbers)
const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    // base case
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    
    let shortest = null;

    // recursion branch
    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder,numbers,memo);
        if(remainderCombination !== null){
            const combination = [...remainderCombination, num];
            if(shortest === null || combination.length < shortest.length){
                shortest = combination;
            }
        }
    }

    memo[targetSum] = shortest;
    return memo[targetSum];

}

// // test
// console.log(bestSum(7, [5,3,4,7])); // [7]
// console.log(bestSum(8, [2,3,5])); // [3,5]
// console.log(bestSum(8, [1,4,5])); // [4,4]
// console.log(bestSum(100, [1,2,5,25])); // [25,25,25,25]

// 例子六 canConstruct(target, wordBank)
// m: target.length
// n: wordBank.length

// === brute force ===
// time complaxity : O(n^m * m) 
// space complaxity : O(m^2)

// === memolized ===
// time complaxity : O(n * m^2)
// space complaxity : O(m^2)

const canConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    // base case
    if(target === '') return true;

    for(let word of wordBank){
        if(target.indexOf(word) === 0){ // This means the word string is prefix substring of the target string 
            const suffix = target.slice(word.length); // get the suffix (from prefix.length to the end)
            if(canConstruct(suffix,wordBank,memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

// // test
// console.log(canConstruct('abcdef', ['ab','abc','cd','def','abcd'])); // true
// console.log(canConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])); // false
// console.log(canConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])); // true
// console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee','eeeeee']));  // false

// 例子七
const countConstruct = (target, wordBank, memo={}) => {

    if(target in memo) return memo[target];
    if(target === '') return 1;
    let count = 0;

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length); // get the suffix
            count += countConstruct(suffix,wordBank,memo);
        }
    }

    memo[target] = count;
    return memo[target];
}

// // test
// console.log(countConstruct('purple', ['purp','p','ur','le','purpl'])); // 2
// console.log(countConstruct('abcdef', ['ab','abc','cd','def','abcd'])); // 1
// console.log(countConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])); // 0
// console.log(countConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])); // 4
// console.log(
//     countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
//     ['e','ee','eee','eeee','eeeee','eeeeee']));  // 0

// 例子八 allConstruct(target, wordBank)
const allConstruct = (target, wordBank, memo={}) => {
    // Base case
    if(target === '') return [[]];

    let result = [];
    
    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length); // get the suffix
            const surffixnWays = allConstruct(suffix,wordBank,memo);
            const targetWays = surffixnWays.map( way => [word,...way]);
            result.push(...targetWays);
        }
    }

    return result;
}

// // test
// console.log(allConstruct('purple', ['purp','p','ur','le','purpl'])); // [ [ 'purp', 'le' ], [ 'p', 'ur', 'p', 'le' ] ]
// console.log(allConstruct('abcdef', ['ab','abc','cd','def','abcd'])); // [ [ 'abc', 'def' ] ]
// console.log(allConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar'])); // []
// console.log(allConstruct('enterapotentpot', ['a','p','ent','enter','ot','o','t'])); // []
// console.log(
//     allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',
//     ['e','ee','eee','eeee','eeeee','eeeeee']));  // []


