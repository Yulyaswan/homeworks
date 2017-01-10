;
(function(){
	"use strict"

	var ask = prompt("Enter a number from 1 to 87");

	while (ask < 1 || ask > 87){
		alert("please enter a number from 1 to 87");

		ask = prompt("Enter a number from 1 to 87");
	}

	fetch(`http://swapi.co/api/people/${ask}/`)
		.then(res => res.json())

		.then(function(res){
			let films = res.films,
				name = res.name,
				species = res.species;


			let getFilms = films.map(i => fetch(i).then(res => res.json()));

			let getSpecies = fetch(species[0]).then(res => res.json());

			return Promise.all(getFilms).then(res => ({name, getSpecies, films: res}));
		})
		
		.then(function(res){
			let films = res.films,
				name = res.name,
				species = res.getSpecies;

				return Promise.all([species]).then(res => ({name, films, species: res}));
		})

		.then(function(res){
			let name = res.name,
				films = res.films,
				species = res.species[0].name,
				language = res.species[0].language;

			let people = res.species[0].people.map(i => fetch(i).then(res => res.json()));

			return Promise.all(people).then(res => ({name, films, species, language, people: res}));
		})
		.then(function(res){
			let name = res.name,
				films = res.films,
				species = res.species,
				language= res.language,
				people = res.people;

			console.log(`name: ${name}\n Films: ${films.map(i => i.title).join(", ")}n Species: ${species}\n Language: ${language}\n People: ${people.map(i => i.name).join(", ")}`);
		})



})();