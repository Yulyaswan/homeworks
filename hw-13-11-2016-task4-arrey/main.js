let str = null,
    vowel = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"];

do { 
	str = prompt("type you string");

	if (str < "A" || str > "z") {
		alert ("please use only Latin letters");
	}

} while(str < "A" || str > "z");


let newFunc = function() {

	for (var i=0; i < vowel.length; i++) {
		while(str.indexOf(vowel[i]) != -1) {
		 str = str.replace(vowel[i], '');
		}
	}

	console.log(str);

}

newFunc(str);
