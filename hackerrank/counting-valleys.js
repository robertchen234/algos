import React, { Component } from "react";
import "./App.css";

// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step. Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

// For example, if Gary's path is , he first enters a valley  units deep. Then he climbs out an up onto a mountain  units high. Finally, he returns to sea level and ends his hike.

// Function Description

// Complete the countingValleys function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter(s):

// n: the number of steps Gary takes
// s: a string describing his path
// Input Format

// The first line contains an integer , the number of steps in Gary's hike. 
// The second line contains a single string , of  characters that describe his path.

// Constraints

// Output Format

// Print a single integer that denotes the number of valleys Gary walked through during his hike.

// Sample Input

// 8
// UDDDUDUU
// Sample Output

// 1
// Explanation

// If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:

// _/\      _
//    \    /
//     \/\/
// He enters and leaves one valley.

const solution = (n, s) => {
  let count = 0; // count of how many valleys traversed
  let altitude = 0; // zero is sea level

  // iterate through s, subtract or add to altitude
  // if -1, then count increases because we just entered a valley

  for (let x of s) {
    if (x === "U") {
      altitude += 1;
    } else {
      altitude -= 1;
      if (altitude === -1) {
        count += 1;
      }
    }
  }

  console.log(count);
  return count;
};

const input1 = 8;
const input2 = "UDDDUDUU";

// yarn start or npm start

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="input">
          <h1>Input: {input1}</h1>
          <h1>Input2: {input2}</h1>
        </div>
        <div className="output">
          <h1>Output: {solution(input1, input2)}</h1>
          {/* <h1>Output2: {solution(input2)}</h1> */}
        </div>
      </div>
    );
  }
}

export default App;
