function arrayOfArrayProducts(arr) { // [8, 10, 2]
  // optimize
  // Linear Time O(n)
  
  if(arr.length < 2) {
    return []
  }
  
  let newArr = []
  let product = 1
  
  for(let i = 0; i <= arr.length - 1; i++) { // i = 2
    newArr[i] = product // newArr = [1, 8, 80]
    product *= arr[i] // product = 160
  }
  
  product = 1
  
  for(let j = arr.length - 1; j >= 0; j--) { // j = 0
    newArr[j] *= product // newArr = [20, 16, 80]
    product *= arr[j] // product = 160
  }
  
  return newArr
}




// function arrayOfArrayProducts(arr) { // [2, 2]
  // we need to know what index we are in
  // we can use nested for loop
  // let i be the index that we're currently calculating
  // let j be the other indexes that need to be multiplied
  // at the end of the j loop, i should be the product of all the other numbers
  // Quadratic Time O(n^2)
  
//  let product = 1
//  let newArr = []
  
//  if(arr.length < 2) {
//    return []
//  }
  
//  for(let i = 0; i < arr.length; i++) { // i = 0
//   product = 1
//    for(let j = 0; j < arr.length; j++) { // [1*2]
//      if(j !== i) {
//        product *= arr[j]
//      }
//    }
//    newArr.push(product)
//  }
//  return newArr
//}