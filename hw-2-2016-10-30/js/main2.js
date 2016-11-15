


var str = "сгенерировать число от 1 до 11? введите Y/N";
var i = 0;
let random_number = 0;
var sum = 0;
let next_step;

do {
    var first_player = prompt("P1 " + str);
    if(first_player === "Y" || first_player === "y"){
    	i = 1;

    	do {
	    	random_number = (+(Math.random().toFixed(1)*10 + 1));
	    	sum += random_number;


	    	next_step = confirm("Ваше число " + random_number + " Сумма" + sum + " Играем дальше?");
	    } while (sum < 21); 

    	if(sum > 21) {
    		alert("Вы проиграли!");
    	}

    } else if (first_player === "N" || first_player === "n" || first_player === null) {
    	var second_player = prompt("P2 " + str);

    	if(second_player === "Y" || second_player === "y") {
    		do {
		    	random_number = (+(Math.random().toFixed(1)*10 + 1));
		    	sum += random_number;

	    		next_step = confirm("Ваше число " + random_number + " Сумма" + sum + " Играем дальше?");
	    	} while (sum < 21 || next_step === true);

	    	if(sum > 21) {
	    		alert("Вы проиграли!");
	    	}
    	}
    	i = 1;
    } else {
		alert("Вы ввели " + first_player);
	}
} while (i === 0);
