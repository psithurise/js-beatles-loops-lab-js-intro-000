// add solution here
var arr = []
function theBeatlesPlay(musicians, instruments) {

  for(let i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr
}

function johnLennonFacts(facts) {
  var i = 0
  while(i < facts.length) {
    arr.push(arr[i] + "!!!");
    i++
  }
  return arr
}

function iLoveTheBeatles(num) {
  do {
    arr.push("I love the Beatles!");
  } while (num < 15)
  return arr
}
