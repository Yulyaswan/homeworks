;
let str = "2016/05/20-12:00:35+0300";
	str = str.replace(/-/g, " ");

let firstArr = str.split(/\+\w+/);
let nextArr = str.match(/\+\w+/);
let result = firstArr.concat(nextArr).join(" ");

let timestamp = Date.parse(new Date(result));
console.log(timestamp);