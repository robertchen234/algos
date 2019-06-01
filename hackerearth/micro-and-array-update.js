/*
// Sample code to perform I/O:

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
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here

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
    // console.log(arr) [ '3 4', '1 2 5', '3 2', '2 5 5' ]
    let first = []
    let second = []
    let count = 0
    let min = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            first = arr[i].split(" ")
            // console.log(first) [ '3', '2' ]
        } else {
            count = 0
            second = arr[i].split(" ")
            // console.log(second) [ '2', '5', '5' ]
            
            min = second.sort((a,b) => a - b)[0]
            
            if(first[1] - min < 0) {
                console.log(0)
            } else {
                console.log(first[1] - min)
            }
        }
    }
}
