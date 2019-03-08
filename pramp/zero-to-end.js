function zeroToEnd(arr) {
  let newArr = []
  count = 0

  for (let x of arr) {
    if (x !== 0) {
      newArr.push(x)
    } else {
      count++
    }
  }

  for (let i = 0; i < count; i++) {
    newArr.push(0)
  }

  return newArr
}

zeroToEnd([2, 5, 38, 0, 9, 49, 0, 14, 0, 3, 12, 0, 24, 16, 4, 8])