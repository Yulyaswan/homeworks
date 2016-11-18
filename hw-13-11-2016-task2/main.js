/* arguments Function*/
var arr=[];

function argFunction() {
  for (var i =0; i < arguments.length; i++) {
    arr[i] = typeof arguments[i];
 } 
  return `${arr}`;
}

argFunction(15, true, "hi", "lol", 6523, false);

console.log(`${arr}`);


/* spread Function */

var restFunction = (...arg) =>  {

}

restFunction("hi", 15, true, "lol", false, 6523);
