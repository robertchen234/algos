function getMaxProfit(stockPrices) {

  // Calculate the max profit
  // optimize, greedy
  // find the difference for each index
  // store the highest difference
  // find the lowest price while going through each index
  // store the lowest price
  
  let low = stockPrices[0]
  let diff = stockPrices[1] - low
  
  if (stockPrices.length < 2) {
    return "error, need more than one stock"
  } 
  
  for (let i = 1; i < stockPrices.length; i++) {
    if (stockPrices[i] - low > diff) {
      diff = stockPrices[i] - low
    }
    if (stockPrices[i] < low) {
      low = stockPrices[i]
    }
  }

  return diff;
}




// function getMaxProfit(stockPrices) {

//   // Calculate the max profit
//   // brute force
//   // find the difference for each index
//   // store the highest difference
  
//   let diff = stockPrices[1] - stockPrices[0]
  
//   if (stockPrices.length < 2) {
//     return "error, need more than one stock"
//   } 
  
//   for (let i = 0; i < stockPrices.length; i++) {
//     for (let j = i+1; j < stockPrices.length; j++) {
//       if (stockPrices[j] - stockPrices[i] > diff) {
//         diff = stockPrices[j] - stockPrices[i]
//       }
//     }
//   }

//   return diff;
// }


















// Tests

let desc = 'price goes up then down';
let actual = getMaxProfit([1, 5, 3, 2]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'price goes down then up';
actual = getMaxProfit([7, 2, 8, 9]);
expected = 7;
assertEqual(actual, expected, desc);

desc = 'price goes up all day';
actual = getMaxProfit([1, 6, 7, 9]);
expected = 8;
assertEqual(actual, expected, desc);

desc = 'price goes down all day';
actual = getMaxProfit([9, 7, 4, 1]);
expected = -2;
assertEqual(actual, expected, desc);

desc = 'price stays the same all day';
actual = getMaxProfit([1, 1, 1, 1]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'error with empty prices';
const emptyArray = () => (getMaxProfit([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one price';
const onePrice = () => (getMaxProfit([1]));
assertThrowsError(onePrice, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}