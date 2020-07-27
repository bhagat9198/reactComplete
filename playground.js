// let arr = ['a','b','c'];
// console.log('in');
// for(let key in arr) {
//   console.log(key);
// }

// console.log('of');
// for(let key of arr) {
//   console.log(key);
// }



let obj = {
  item1: 'a',
  item2: 'b',
  item3: 'c',
};

for(let key in obj) {
  console.log(key);
}

console.log('of');
for(let key of obj) {
  console.log(key);
}