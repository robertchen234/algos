
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
    const arr = input.split("\n")[0].split(" ").map(x=>parseInt(x))
    let first = 0
    let second = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            first += arr[i]
        } else {
            second += arr[i]
        }
    }
    console.log(first)
    console.log(second)
}
