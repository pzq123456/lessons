// ======= tabulation ==========

// 例子一 斐波那契数列 递归树与动态规划
const fib = (n) => {
    let table = Array(n+1).fill(0);
    table[1] = 1;
    for(let i = 0; i <= n; i++){
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}
// // test
// console.log(fib(6)); // 8
// console.log(fib(7)); // 13
// console.log(fib(8)); // 21
// console.log(fib(50)); // 12586269025

// 例子二 gridTraveler(m, n)
const gridTraveler = (m ,n) =>{
    // first init the 2D table m * n and fill them with 0
    const table = Array(m + 1)
        .fill()
        .map( () =>  Array(n + 1).fill(0));
    // the .fill create blank element in the m+1 array
    // .map means do the opertate in '()' for each element 

    // base case
    table[1][1] = 1;
    // traverse every element in the table
    for(let i = 0 ; i <= m; i++){
        for(let j = 0; j <= n; j++){
            let current = table[i][j];
            if( j + 1 <= n ) table[i][j + 1] += current;  
            if( i + 1 <= m ) table[i + 1][j] += current;
        }
    }

    return table[m][n];
}
// // test
// console.log(gridTraveler(1,1)); // 1
// console.log(gridTraveler(2,3)); // 3
// console.log(gridTraveler(3,2)); // 3
// console.log(gridTraveler(3,3)); // 6
// console.log(gridTraveler(18,18)); // 2333606220