; (function(){
	"use strict";


	let users = [
		{name: "Bob", lastname: "Johnson", age: 25, id: "user1"},
		{name: "Jack", lastname: "Brown", age: 40, id: "user2"},
		{name: "Mary", lastname: "Garcia", age: 18, id: "user3"},
		{name: "Sam", lastname: "Thompson", age: 20, id: "user4"}
	];

	let userName = document.querySelector('.name span'),
		userLastname = document.querySelector('.lastname span'),
		userAge = document.querySelector('.age span');

	window.addEventListener("popstate", changeHistory);
	document.body.addEventListener("click", changeUrl);
	document.body.addEventListener("hashchange", changeObj);


	function changeUrl(ev) {
		if(ev.target.localName === "a") {
			ev.preventDefault();

			let id = ev.target.getAttribute('href').slice(1);
			typeUser(id);
		}
	}

	function typeUser(userId){
		let	user = users.find(el => el.id === userId),
			printName = user.name,
			printLastname = user.lastname,
			printAge = user.age;

		let str ="";
		for(var key in user) {
			if(str !== ""){
				str += "&";
			}
			str += key + "=" + encodeURIComponent(user[key]);
		}

		str = str.split(/&id=\w+$/g).join('');

		userName.textContent = printName;
		userLastname.textContent = printLastname;
		userAge.textContent = printAge;

		history.pushState({userId}, "", `${location.origin}/${userId}/${str}`);
	} //typeUser()


	function changeHistory(ev) {
		if(ev.state) {

			users.find(el => {
				if(el.id === ev.state.userId){
					userName.textContent = el.name;
					userLastname.textContent = el.lastname;
					userAge.textContent = el.age;
				}
			});
		} 
		else {
			userName.textContent = "";
			userLastname.textContent = "";
			userAge.textContent = "";
		}
	}//changeHistory()

	function changeObj() {
		let path = location.pathname.match(/(\w+(?=\/))/g).join(),
			hashName = location.hash.match(/(\w+(?=\=))/g).join(),
			hashVal = location.hash.match(/=\w+/g).join().slice(1),
			changeUser = users.find(el => el.id === path);

		for(var key in changeUser) {
			if(key === hashName) {
				changeUser[key] = hashVal;
			}
		}
	}//changeObj()
})();