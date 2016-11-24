let nums = [1, 2, 3, 5, 8, 13, 21, 34];

let str = ["this", "is", "a", "very", "long", "array", "which", "has", "absolutely", "no", "sense"];

/***********************************/
let doublSum = nums.reduce((el, el1) => el+el1*2,0);
console.log(doublSum);
/*****************************************/

let isEven = nums.some(el => el%2 ===0);
console.log(isEven);

/********************************************/
let newStr = str.join(' ');
console.log(newStr);

/*****************************************/

let newArr = str.map(el => `${el} - ${el.length}`);

console.log(newArr);

/*****************************************/

let arrMoreFourLetter = str.filter(el => el.length >=4);
console.log(arrMoreFourLetter);

/*****************************************/

let oddArr = nums.filter(el => el%2);
console.log(oddArr);

/******************** 7 *********************/

let sum = nums.reduce((function(el, el1){
  let result = el+el1;

  if(result > 100) {
    return true;
  } else {
    return false;
  }

}),0);
console.log(sum);

/*******************************************/

var sortArr = str.sort(function(a,b) {
  return a.length-b.length;
});
console.log(str);

/******************************************/

let maxIndex = sortArr.map(el => el.length);
console.log(maxIndex.length - 1);

/*****************************************/
let concatArr = nums.concat(str).join(',');
console.log(concatArr);


