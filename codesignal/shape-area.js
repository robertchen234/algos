// https://app.codesignal.com/arcade/intro/level-2/yuGuHvcCaFCKk56rJ

// n=1 => 1  // square plus 0
// n=2 => 5  // square plus 1
// n=3 => 13 // square plus 4
// n=4 => 25 // square plus 9
 
function shapeArea(n) {
  return ((n * n) + ((n - 1) * (n - 1)))
}
