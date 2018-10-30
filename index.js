function theBeatlesPlay (arrayM, arrayI) {
  var i = [];
  for (let j = 0; j < 4; j++) {
    i.push(`${arrayM[j]} plays ${arrayI[j]}`);
  }
return i;
}
function johnLennonFacts (array) {
  let j = 0;
  while (j < array.length) {
  array[j] = array [j++] + "!!!"
  }
  return array;
}
function iLoveTheBeatles (n) {
  let i = [];
  do {
    i.push("I love the Beatles!");
    incrementVariable(n)
}  while (n < 15) 
}