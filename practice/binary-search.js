function binarySearch(arr, target) {
  let mid = arr[Math.floor(arr.length/2 - 1)]
  let left = arr.slice(0, mid)
  let right = arr.slice(mid, arr.length)
  let idx = 0
  idx += mid
  
  if (arr === arr[mid]) {
    return "not found"
  }
  if(arr[mid] === target) {
    return idx
  } else if(arr[mid] < target) {
    binarySearch(left, target)
  } else {
    binarySearch(right, target)
  }
}