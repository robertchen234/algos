// https://app.codesignal.com/interview-practice/task/pMvymcahZ8dY4g75q

function firstDuplicate(a) {
  let hashMap = { lowestDuplicateIndex: a.length}
  
  for (let i = 0; i< a.length; i++) {
      
      if (hashMap[a[i]] < hashMap.lowestDuplicateIndex && i < hashMap.lowestDuplicateIndex) {
          hashMap.lowestDuplicateIndex = i
      }
      
      hashMap[a[i]] = i
  }
  
  if (hashMap.lowestDuplicateIndex === a.length) {
      return -1
  } else {
      return a[hashMap.lowestDuplicateIndex]
  }
}

// function firstDuplicate(a) {
//     let index = a.length
//     let duplicate = false
  
//     // [2, 1, 3, 5, 3, 2]
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < a.length; j++) {
//             if (a[i] === a[j] && j > i && j < index) {
//                 index = j
//                 duplicate = true
//             }
//         }
//     }
  
//     if (duplicate) {
//         return a[index]
//     } else {
//         return -1
//     }
// }
