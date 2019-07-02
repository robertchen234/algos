// https://app.codesignal.com/interview-practice/task/uX5iLwhc6L5ckSyNC

function firstNotRepeatingCharacter(s) {
  let front = ""
  let back = ""
  
  for (let i = 0; i < s.length; i++) {
      front = s.slice(0, i)
      back = s.slice(i + 1, s.length)
      
      if (!front.includes(s[i]) && !back.includes(s[i])) {
          return s[i]
      }
  }
  
  return '_'
}
