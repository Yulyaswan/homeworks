/* arguments Function*/
var arr=[];

function argFunction() {
  for (var i =0; i < arguments.length; i++) {
    arr[i] = typeof arguments[i];
 } 
  return `${arr}`;
}

argFunction(15, true, "hi", "lol", 6523, false);


/*********** spread Function *************/

var restFunction = (...arg) =>  {
	  for (var i =0; i < arg.length; i++) {
		arr[i] = typeof arg[i];
 	}

  return `${arr}`;
}

restFunction("hi", 15, true, "lol", false, 6523);

/**********************************************/

var result="";
var restFunction = (...arg) =>  {
  arg.forEach(function(el){
    result += (typeof el + ",");
  });
  return result;
}

restFunction(56, null, NaN, "hi", 15, true, "lol", false, 6523);
