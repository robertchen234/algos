// https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/hamiltonian-and-lagrangian/

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
    const arr = input.split("\n").slice(1, 2)[0].split(" ").map(num => parseInt(num))
    let newArr = []
    let greater = true
    
    // 16 17 4 3 5 2
    
    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j <= arr.length; j++) {
            if (arr[i] >= arr[j] || !arr[j]) {
                greater = true
            } else {
                greater = false
                j = arr.length
            }
        }
        if (greater) {
            newArr.push(arr[i])
        }
    }
    
    console.log(newArr.join(" "))
}