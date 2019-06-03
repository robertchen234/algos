// https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/no-sharing-capillary-82ed3fe2/

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

// get number of test cases
// get array of test cases
// idx 0 is the limit
// sort idx 1 2 3
// if idx 3 % idx 2 === 0 || idx 3 % idx 1 === 0 || idx 2 % idx 1 === 0
    // then output 0
    // return
// else
    // count++
// output count


function main(input) {
    const numTests = input.split("\n")[0] // 2
    const arr = input.split("\n").slice(1, input.length).map(element => element.split(" ").map(num => parseInt(num)))
    let limit = 0
    let count = 0
    
    for (let i = 0; i< arr.length; i++) {
        count = 0
        limit = arr[i][0]
        
        if (arr[i][3] % arr[i][2] === 0 && arr[i][3] % arr[i][1] === 0 && arr[i][2] % arr[i][1] === 0) {
            count = 0
        } else {
            for (let j = 0; j <= limit; j += arr[i][1]) {
                if (j % arr[i][2] !== 0 && j % arr[i][3] !== 0) {
                    count++
                }
            }
            for (let k = 0; k <= limit; k += arr[i][2]) {
                if (k % arr[i][1] !== 0 && k % arr[i][3] !== 0) {
                    count++
                }
            }
            for (let l = 0; l <= limit; l += arr[i][3]) {
                if (l % arr[i][1] !== 0 && l % arr[i][2] !== 0) {
                    count++
                }
            }
        }
        console.log(count)
    }
}
