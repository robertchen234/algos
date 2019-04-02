import React, { Component } from "react";
import "./App.css";

// PROBLEM
// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors of the socks in the pile.

// Constraints

//  where
// Output Format

// Return the total number of matching pairs of socks that John can sell.

// Sample Input

// 9
// 10 20 20 10 10 30 50 10 20
// Sample Output

// 3

const solution = (n, arr) => {
  const sorted = arr.sort((a, b) => a - b);
  let previous = null;
  let count = 0;
  let pairs = 0;

  for (let x of sorted) {
    if (x === previous) {
      count += 1;
    } else {
      count = 1;
    }

    if (count === 2) {
      pairs += 1;
      count = 0;
    }

    previous = x;
  }
  return pairs;
};

const input1 = 3;
const input2 = [4, 2, 4];
const input3 = 10;
const input4 = [1, 2, 3, 4, 5, 6, 7, 5, 9, 4];

// yarn start or npm start

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="input">
          <h1>Input1: {input1}</h1>
          <h1>Input2: {input2}</h1>
          <h1>Input3: {input3}</h1>
          <h1>Input4: {input4}</h1>
        </div>
        <div className="output">
          <h1>Output1: {solution(input1, input2)}</h1>
          <h1>Output2: {solution(input3, input4)}</h1>
        </div>
      </div>
    );
  }
}

export default App;
