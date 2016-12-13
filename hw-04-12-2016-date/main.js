;

let constantDay = {
	"YYYY": function(date){
				return date.getFullYear();
			},
	"YY": function(date){
				var y = "" + date.getFullYear();
				return y.substr(y.length - 2, y.length);
			},
	"MMMM": function(date) {
		        var mon = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
		        return mon[date.getMonth()];
		    },
	"MM": function(date){
			var m = date.getMonth() + 1;
				return m < 10 ? "0" + m : m;
			},
	"DD": function(date){
			var d = date.getDate();
			return d < 10 ? "0" + d : d;
		},
	"HH": function(date){
				return date.getHours();
			},
	"mm": function(date){
				return date.getMinutes();
			},
	"ss": function(date){
				return date.getSeconds();
			}
}

Date.prototype.myDate = function(str) {
    for(var pattern in constantDay) {
        str = str.replace(pattern, constantDay[pattern](this));
    }
    return str;
}


var date = new Date();
var i = date.myDate('YY-MMMM-DD HH:mm:ss');
console.log(i);
