
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
    const obj = {}
    let sortedObj = {}
    
    for (let x of arr) {
        if (obj[x]) {
            obj[x]++
        } else {
            obj[x] = 1
        }
    }
    
    Object.keys(obj).sort().forEach(key => sortedObj[key] = obj[key])
    
    for (let y in sortedObj) {
        console.log(y + " " + sortedObj[y])
    }
}
