// https://www.hackerearth.com/practice/data-structures/arrays/1-d/practice-problems/algorithm/strange-game-1-7e758acb-1bff10f0/

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

// identify number of test cases
// break apart the number of test cases
// identify runTime
// sort bob's cards biggest to smallest, the first one is the max
// iterate through alice's hand
  // if card is smaller than bobMax
    // totalTime += (bobMax+1 - card) * runTime
// output totalTime

function main(input) {
    let split = input.split("\n")
    const numbTestCases = split[0] 
    let arr = split.slice(1, input.length)
    let line = 0
    let testCase = []
    let runTime = 0
    let bobMax = 0
    let totalTime = 0
    
    for(let i = 0; i < arr.length; i++) {
        line++
        if (line <= 3) {
            testCase.push(arr[i])
        }
        
        if (line === 3) {
            runTime = parseInt(testCase[0].split(" ")[1])
            bobMax = parseInt(testCase[2].split(" ").sort((a, b) => b - a)[0])
            aliceCards = testCase[1].split(" ").map(card => parseInt(card))
            
            for (let card of aliceCards) {
                if (card < bobMax) {
                    totalTime += (bobMax + 1 - card) * runTime
                }
            }
            
            console.log(totalTime)
            
            testCase = []
            line = 0
            totalTime = 0
        }
    }
}
