import React, { Component } from "react";
import "./App.css";

// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered  if they are safe or  if they must be avoided. For example,  indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes  and . She could follow the following two paths:  or . The first path takes  jumps while the second takes .

// Function Description

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):

// c: an array of binary integers
// Input Format

// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .

// Constraints

// Output Format

// Print the minimum number of jumps needed to win the game.

// Sample Input 0

// 7
// 0 0 1 0 0 1 0
// Sample Output 0

// 4

const solution = input => {
  // if i + 1 === 1 || i + 2 === 0
  // then i += 1
  // jumps += 1

  let jumps = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i + 1] === 1 || input[i + 2] === 0) { // if next cloud is a bomb then skip it. or if two clouds away is clear, skip next cloud
      i += 1;
    }
    jumps += 1; // count the jump whether we skip next cloud or not
  }
  jumps -= 1; // no jump from last cloud
  console.log(jumps);
};

const input1 = [0, 0, 1, 0, 0, 1, 0];
// const input2 = 4;

// yarn start or npm start

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="input">
          <h1>Input: {input1}</h1>
          {/* <h1>Input2: {input2}</h1> */}
        </div>
        <div className="output">
          <h1>Output: {solution(input1)}</h1>
          {/* <h1>Output2: {solution(input2)}</h1> */}
        </div>
      </div>
    );
  }
}

export default App;
