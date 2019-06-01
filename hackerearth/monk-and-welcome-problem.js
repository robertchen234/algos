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
    const first = arr[0].split(" ")
    const second = arr[1].split(" ")
    let newArr = []
    
    for (let i = 0; i < first.length; i++) {
        newArr.push(parseInt(first[i]) + parseInt(second[i]))
    }
    
    console.log(newArr.join(" "))
}
