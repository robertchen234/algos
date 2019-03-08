
/* 
function findArrayQuadruplet(arr, s) {
  
  if (arr.length < 4) {
    return []
  }
  
  let sorted = arr.sort((a, b) => a - b)
  let reversed = sorted.reverse()
  let quad = [] 
  let sum = 0
  
  for (let i = 0; i < 100000; i++) {
    
    if (s - sum > quad[quad.length-1]) {
      quad.pop()
    } else {
      quad.shift()
    }
    
    sum = quad.reduce(function(a, b) { return a + b; }, 0)
    
    for (let x of sorted) {
      
      if (sum + x <= s && quad.length < 4) {
        sum += x
        quad.push(x)
      }
      
      if (sum === s && quad.length === 4) {
        //console.log(quad.sort((a, b) => a - b))
        return quad.sort((a, b) => a - b)
      } 
      
    }
    
  }
  return []
}
*/
    

/*
function findArrayQuadruplet(arr, s) {
  
  if (arr.length < 4) {
    return []
  }
  
  let sum = 0 
  let diff = s
  let sorted = arr.sort((a, b) => a - b)
  let rev = sorted.reverse()
  let quad = []
  let half = []
  let revHalf = []
  
  for (let i = 0; i < 1000; i++) {
    console.log(quad)
    half = rev
    
    quad.shift()
    
    for (let x of half) {
      
      if (diff > half[half.length/2]) {
        half = half.slice(0, (half.length/2))
      } else {
        half = half.slice((half.length/2), half[half.length/2])
      }
    
      sum = quad.reduce(function(a, b) { return a + b; }, 0)

      if (sum + x <= s && quad.length < 4) {
        quad.push(x)
      }
      if (sum === s && quad.length === 4) {
        console.log(quad.sort((a, b) => a - b))
        return quad.sort((a, b) => a - b)
      }
      diff = s - sum
    }
  }
  return []
}
*/


function findArrayQuadruplet(arr, s) {
  n = arr.length

  if (n < 4) {
    return []
  }

  arr.sort((a, b) => a - b)

  for (let i = 0; i <= n - 4; i++) {
    for (let j = i + 1; j <= n - 3; j++) {
      diff = s - (arr[i] + arr[j])

      low = j + 1, high = n - 1;

      while (low < high) {
        if (arr[low] + arr[high] < diff) {
            low++
        } else if (arr[low] + arr[high] > diff) {
          high--
        } else {
          return [arr[i], arr[j], arr[low], arr[high]]
        }
      }
    }
  }
  return []
}

