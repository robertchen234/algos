// https://app.codesignal.com/arcade/intro/level-1/egbueTZRRL5Mm4TXN

function centuryFromYear(year) {
  let yearStr = year.toString()
  let century = parseInt(yearStr.slice(0, yearStr.length - 2))
  let lastTwoDigits = parseInt(year.toString().slice(yearStr.length - 2, yearStr.length))
  
  
  if (year <= 100) {
      return 1
  } else if (lastTwoDigits === 0) {
      return century
  } else {
      return century + 1
  }
}