import React, { Component } from "react";
import "./App.css";

// Given a  2D Array, :

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

// For example, given the 2D array:

// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// We calculate the following  hourglass values:

// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18
// Our highest hourglass value is  from the hourglass:

// 0 4 3
//   1
// 8 6 6
// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

// Function Description

// Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

// hourglassSum has the following parameter(s):

// arr: an array of integers
// Input Format

// Each of the  lines of inputs  contains  space-separated integers .

// Constraints

// Output Format

// Print the largest (maximum) hourglass sum found in .

// Sample Input

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
// Sample Output

// 19

// iterate through first row
// iterate through first column
// if possible
// add three elements to sum
// add row + 1 and column + 1 to sum
// add row + 2 and three elements to sum
const solution = arr => {
  let maxRow = arr.length;
  let maxCol = arr[0].length;
  let total = 0;
  let maxTotal = null;

  for (let row = 0; row < maxRow; row++) {
    for (let col = 0; col < maxCol; col++) {
      if (row + 2 < maxRow && col + 2 < maxCol) {
        total += arr[row][col];
        total += arr[row][col + 1];
        total += arr[row][col + 2];
        total += arr[row + 1][col + 1];
        total += arr[row + 2][col];
        total += arr[row + 2][col + 1];
        total += arr[row + 2][col + 2];

        if (total > maxTotal || maxTotal === null) {
          maxTotal = total;
        }

        total = 0;
      }
    }
  }
  console.log(maxTotal);
  return maxTotal;
};

const input1 = [
  [-1, -1, 0, - 9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5]
];
// const input2 = [13, 1, 11, 10, 6];

// yarn start or npm start

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="input">
          <h1>Input: {input1}</h1>
        </div>
        <div className="output">
          <h1>Output: {solution(input1)}</h1>
        </div>
      </div>
    );
  }
}

export default App;
