// https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/monk-and-power-of-time/

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
    let call = input.split("\n").slice(1, 2)[0].split(" ").map(num => parseInt(num))
    const ideal = input.split("\n").slice(2, 3)[0].split(" ").map(num => parseInt(num))
    let hold = ""
    let time = 0
    let i = 0

    
    // if call === ideal, remove it
      // else push it to the back
    // add 1 time per step
    // keep going until call is empty
    
    
    
    while (call.length > 0) {
        if (call[0] === ideal[i]) {
            call = call.slice(1, call.length)
            i++
        } else {
            hold = call[0]
            call = call.concat(hold)
            call = call.slice(1, call.length)
        }
        time++
    }
    console.log(time)
}
