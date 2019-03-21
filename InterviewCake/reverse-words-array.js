function reverseWords(message) {

  // Decode the message by reversing the words
  
  // let word = []
  // let newMessage = []
  // iterate through message
    // push element to word
    // if element = " "
      // push word to newMessage 
    // if last element
      // push word to newMessage
      // return newMessage

  let word = []
  let newMessage = []
  
  for(let i = 0; i < message.length; i++) {
    if(message[i] !== " ") {
      word.push(message[i])
    }
    if(message[i] === " ") {
      word.unshift(message[i])
      newMessage.unshift(word.join(""))
      word = []
    }
    if(i === message.length - 1) {
      newMessage.unshift(word.join(""))
      return newMessage.join("")
    }
  }
}
