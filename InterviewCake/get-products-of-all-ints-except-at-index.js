function getProductsOfAllIntsExceptAtIndex(intArray) {

  // Make a list of the products
  // brute force
  // store index in variable
  // store product in variable
  // store new array
  // iterate through array
    // if index not equal to stored index
      // then multiply with product
      // push into new array
  // return new array when done iterating
  // O(n^2)

  let product = 1
  let newArray = []
  
  if (intArray.length < 2) {
    throw new Error("array must have at least 2 numbers") 
  }
  
  for (let i = 0; i < intArray.length; i++) {
  product = 1
  for (let j = 0; j <intArray.length; j++) {
    if (i !== j) {
      product = product * intArray[j]
    }
  }
    newArray.push(product)
  }
  return newArray
}