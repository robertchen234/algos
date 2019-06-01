
process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});


// 6            how many numbers in following array
// 1 1 1 2 2 0  array
// 6            how many input checks
// 1
// 2
// 1
// 0
// 3
// 4

// we want the array
// we want to create an array out of the input checks
// iterate through the checksArr and see if arr includes the number

function main(input) {
    const arr = input.split("\n").slice(1,2)[0].split(" ").sort((a,b)=>a-b)
    const checksArr = input.split("\n").slice(3, input.length)
    let counter = 0
    let limit = 0
    
    for (let x of checksArr) {
        counter = 0
        limit = arr.length
        x = parseInt(x)
        
        for (let i = 0; i < limit; i++) {
            if (arr[i] == x) {
                counter++
            } else if (parseInt(arr[i]) > x) {
                limit = i
            }
        }
    
        if (counter == 0) {
            console.log("NOT PRESENT")
        } else {
            console.log(counter)
        }
    }
}
    