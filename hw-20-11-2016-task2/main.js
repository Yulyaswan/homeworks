;
function Subject(data) {
    this.course = data.course;
    this.teacherName = data.teacherName;
    this.duration = data.duration;
    this.passCourese = data.passCourese || 0;
    this.marks = data.marks || [];
}

let student = {
	name: "Jone",
	surname: "Finley",
	age: 25,
	subject: [	new Subject({
					course:"JavaScript",
					teacherName: "Laura",
					duration: 96,
					passCourese: 0.3,
					marks: [4, 5, 5, 3, 2]
				}),

				new Subject({
					course:"Java",
					teacherName: "Bob",
					duration: 288,
					passCourese: 0.7,
					marks: [3, 5, 4, 5, 5, 3 ,5, 4]
				}),

				new Subject({
					course:"php",
					teacherName: "Jone",
					duration: 192,
					passCourese: 0.5,
					marks: [5, 3, 5, 4, 5, 3 ,5, 4]
				})
			],
	getFullName: function(){
		return `My name - ${this.name} ${this.surname}`;
	},
	getAge: function () {
		return `I am ${this.age} years old`;
	},

	getCourses: function(){
		let str = this.subject.map((el,iter) => this.subject[iter].course).join(', ');

		return str;
	},

	addNewCourse: function(teacherName, course, duration){
		let sub = new Subject({
			teacherName: teacherName,
			course: course,
			duration: duration
		});

		subject.push(sub);
	},
	getAvarageMarkByCourse: function(course) {
		function average(el) {
			let sum = null,
				result;

			for(let m = 0; m < el.length; m++) {
				sum += el[m];
			}

			result = sum/el.length;

			if (el == 0) {
				return sum;
			} else {
				return result;
			}
		}

		for(let i = 0; i < this.subject.length; i++){

			let mark = this.subject[i].marks;

			if(course === this.subject[i].course) {
				return average(mark);
			}
		}
	},
	getAvarageMark: function() {
		let finallRes = 0,
			result = 0;

		for (let i = 0; i < this.subject.length; i++) {

			this.subject[i].marks.reduce(function(el, el1){
				result = el+el1;
				return result
			});

			finallRes +=result/this.subject[i].marks.length;
		}

		return finallRes/this.subject.length;
	},

	addMark: function(course, mark) {
		if( mark < 1 || mark > 5) {
			alert(`${mark} is not correct mark`)
		} else {

			for(var i =0; i < this.subject.length; i++) {
				if(course == this.subject[i].course) {
					this.subject[i].marks.push(+mark.toFixed(0));
				}
			}
		}
	},
	addProgress: function(course, hours){
		let progress = 0;
		for(var i = 0; i < this.subject.length; i++) {
			if(course === this.subject[i].course) {
				progress = hours/this.subject[i].duration;
			}
		}

		return +progress.toFixed(2);
	},

	getProgress: function(course) {
		let progressPersent = 0;

		for(var i = 0; i < this.subject.length; i++) {
			if(course == this.subject[i].course) {
				progressPersent = this.subject[i].passCourese*100;
			}			
		}
		return `${progressPersent}%`;
	}
}

console.log(student.getProgress("JavaScript"));
