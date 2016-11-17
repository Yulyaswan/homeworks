let init_counter = +prompt('введите число для инициализации счетчика');
let step_counter = +prompt('введите число, на которое надо увеличивать значение');
let iter_number = +prompt('сколько раз вызывать счетчик?');

var j = 0;

var result = init_counter;


function counter() {

	while(j < iter_number) {
		result +=step_counter;
		j++;
	}
	
	alert(result);
	return result;
} counter();