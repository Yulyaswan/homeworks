;
function Rate(date, bid, ask) {
	this.date = date;
	this.bid = bid;
	this.ask = ask;
}

let str = "apple:2016/5/27__bid_203.38-ask_203.43|2016/5/28__bid_203.35-ask_203.42|2016/5/28__bid_203.39-ask_203.45";
let stockName  = str.match(/\w+(?=:)/g).join();
let date = str.match(/\d{4}\/\d\/\d+/g);
let bid = str.match(/(\d{3}.\d+)(?=-)/g);
let ask = str.match(/\d{3}\.\d{2}(?!-)/g);

var newObj = {};
newObj.stockName = stockName;
newObj.rates = [];

for(var i = 0, j = 0, k = 0; i < date.length, j < bid.length, k < ask.length; i++, j++, k++) {
	newObj.rates.push(new Rate(date[i], +bid[j], +ask[k]));
}

console.log(newObj);