// https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/long-atm-queue-3/

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    const arr = input.split("\n")[1].split(" ").map(num => parseInt(num))
    let count = 1
    
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] > arr[i+1] && arr[i+1]) {
            count++
        }
    }
    
    console.log(count)
}
