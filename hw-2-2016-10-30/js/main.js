let player1 = "P1 \r\n сгенерировать первое случайное число в диапазоне от 1 до 11? \r\n введите Y/N";
let player2 ="P2 \r\n сгенерировать первое случайное число в диапазоне от 1 до 11? \r\n введите Y/N";
let resalt;
let random_number = 0;
let score = 0;
//do {
	let pl1Answer = prompt(player1),
		resultTrue = (pl1Answer === "Y" || pl1Answer ==="y"),
		resultFalse = (pl1Answer === "N" || pl1Answer ==="n" || pl1Answer === null);


	if(resultTrue) {
		do {
			random_number = (+(Math.random().toFixed(1)*10 + 1));
			score += random_number;
			let can_continue = confirm("Ваше число - " + random_number + "!"+ "Общее количество очков - " + score + " Продолжить?");
		} while (score <= 21 || can_continue === false);

	} else if(resultFalse) {
		console.log(pl1Answer);
	} else {
		let result1 = true;

		do {
			result1 = prompt("Вы ввели" + pl1Answer + " Введите Y/N");
		} while (result1 === resultTrue || result1 === resultFalse);
	}
//} while ()