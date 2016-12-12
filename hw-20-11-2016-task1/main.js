;

var obj = {
  num: 1.46875,
  str: "not very long string",
  f() {
    return this.str.split(" ")
  },
  arr: ["some", "array", {someProp: "value"}, 2.356],
  prop: { key: 1 },
  empty: null,
  last: 0
};

function newObjFunc() {

	function chengeFunc(obj) {
		for (var key in obj) {
			if(typeof obj[key] === "string") {
				obj[key] = obj[key].toUpperCase();
			}
			if(typeof obj[key] === "number") {
				obj[key] = +obj[key].toFixed(2);
			}
		}

		Object.preventExtensions(obj);
	}

	function createFunc(obj) {
		let newObj = {};
		var propNamesArr = [];
		var propTypesArr =[];

		for(var key in obj) {
			propNamesArr.push(key);
			propTypesArr.push(typeof obj[key]);
		}

		newObj["количество собственных свойств"] = Object.keys(obj).length;
		newObj.propNames = propNamesArr;
		newObj.propTypes = propTypesArr;

		return newObj;
	}

	chengeFunc(obj);
	return createFunc(obj);
}

newObjFunc(obj);

console.log(newObjFunc(obj));
