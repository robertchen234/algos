// https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/help-jarvis-8a39566e/description/

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
    const arr = input.split("\n").slice(1, input.length)
    let sorted = []
    let ouput = ""
    
    for (let num of arr) {
        num = num.split("").sort((a, b) => a - b).map(n => parseInt(n))
        sorted.push(num)
    }
    
    for (let numArr of sorted) {
        output = "YES"
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] + 1 !== numArr[i+1] && numArr[i+1]) {
                output = "NO"
                i = numArr.length
            }
        }
        console.log(output)
    }
}
