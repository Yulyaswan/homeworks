let str = null,
     vowels = ["a", "e", "i", "o", "u", "y"];

do { 
	str = prompt("type you string");

	if (str < "A" || str > "z") {
		alert ("please use only Latin letters");
	}

} while(str < "A" || str > "z");

let result = str.split("").filter(el => !vowels.includes(el.toLowerCase())).join("");
console.log(result);


