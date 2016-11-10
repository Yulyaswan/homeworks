$(document).ready(function(){

	let email = prompt("Введите ваш emal...");
	let	user_message = '';

	if ( email) {


		let newStr = email.trim();// обрезала пробелы
		let emadrIndex = newStr.indexOf("@"); //индекс @;
		let domainIndex = newStr.lastIndexOf(".");//индекс .;
		let zoneIndex = newStr.length;//индекс последнего символа в строке;

		let emailadress = newStr.slice(0, emadrIndex); // проверка на емейл
		let domain = newStr.slice(emadrIndex+1, domainIndex);// проверка на domain
		let zone = newStr.slice(domainIndex+1, zoneIndex);// проверка на zone

		if(emailadress.length <= 4) {
			user_message = "введите корректное имя!";
		}
		if(domain.length <= 1 || domain.length >= 10) {
			user_message += " введите корректный домен!";
		}
		if(zone.length < 2 || zone.length >= 5) {
			user_message += " введите корректное домен!";
		}

		alert(user_message + "\r\n перезагрузите страницу");
	}
});