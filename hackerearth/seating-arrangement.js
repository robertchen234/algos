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
    const arr = input.split("\n")
    let rows = {
        WSBL: [],
        WSTL: [],
        WSTR: [],
        WSBR: [],
        
        MSBL: [],
        MSTL: [],
        MSTR: [],
        MSBR: [],
        
        ASBL: [],
        ASTL: [],
        ASTR: [],
        ASBR: []
    }
    let counter = 1
    
    for(let i=1; i<=108; i++) {
        if (counter === 1) {
            rows.WSBL.push(i)
        } else if (counter === 2) {
            rows.MSBL.push(i)
        } else if (counter === 3) {
            rows.ASBL.push(i)
        } else if (counter === 4) {
            rows.ASTL.push(i) 
        } else if (counter === 5) {
            rows.MSTL.push(i)
        } else if (counter === 6) {
            rows.WSTL.push(i)
        } else if (counter === 7) {
            rows.WSTR.push(i)
        } else if (counter === 8) {
            rows.MSTR.push(i)
        } else if (counter === 9) {
            rows.ASTR.push(i)
        } else if (counter === 10) {
            rows.ASBR.push(i)
        } else if (counter === 11) {
            rows.MSBR.push(i)
        } else if (counter === 12) {
            rows.WSBR.push(i)
        }
        
        if (counter < 12) {
            counter++
        } else {
            counter = 1
        }
    }
    
    for(let x = 1; x <= arr.length - 1; x++) {
        for(let j = 0; j <= rows.WSBL.length - 1; j++) {
            if (rows.WSBL[j] == arr[x]) {
                console.log(rows.WSBR[j] + " WS")
            } else if (rows.WSTL[j] == arr[x]) {
                console.log(rows.WSTR[j] + " WS")
            } else if (rows.WSTR[j] == arr[x]) {
                console.log(rows.WSTL[j] + " WS")
            } else if (rows.WSBR[j] == arr[x]) {
                console.log(rows.WSBL[j] + " WS")
            } else if (rows.MSBL[j] == arr[x]) {
                console.log(rows.MSBR[j] + " MS")
            } else if (rows.MSTL[j] == arr[x]) {
                console.log(rows.MSTR[j] + " MS")
            } else if (rows.MSTR[j] == arr[x]) {
                console.log(rows.MSTL[j] + " MS")
            } else if (rows.MSBR[j] == arr[x]) {
                console.log(rows.MSBL[j] + " MS")
            } else if (rows.ASBL[j] == arr[x]) {
                console.log(rows.ASBR[j] + " AS")
            } else if (rows.ASTL[j] == arr[x]) {
                console.log(rows.ASTR[j] + " AS")
            } else if (rows.ASTR[j] == arr[x]) {
                console.log(rows.ASTL[j] + " AS")
            } else if (rows.ASBR[j] == arr[x]) {
                console.log(rows.ASBL[j] + " AS")
            }
        }
    }
}
