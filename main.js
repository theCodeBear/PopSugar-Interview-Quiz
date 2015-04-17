/* Coding Quiz for ShopStyle/PopSugar
   100 chairs labeled from 1 to 100. Starting at chair 1, the person and chair at each
   specified chair must be removed. The removal pattern starts by skipping 1 person and
   then increments from there so that after chair 1 is removed one chair is skipped,
   then 2, then 3, etc. Find the final remaining person/chair.
*/

// Written by Todd Kronenberg

var chairs = [];

for (var i=1; i<=100; i++) {
  chairs.push(i);
}
console.log('Initial array of chairs:\n', chairs);

var skip = 0;
var indexToRemove = 0;

while (chairs.length > 1) {
  indexToRemove += skip;
  indexToRemove %= chairs.length;
  console.log('Removed chair:', chairs.splice(indexToRemove, 1)[0]);
  skip++;
}

console.log('\nSurvivor:', chairs[0]);
