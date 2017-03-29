const express = require('express'),
		app = express(),
		bodyParser = require('body-parser');

app.use(express.static('./public/'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

let id = 2;

const books = [
	{
		id: 0,
		title: "book1",
		author: "Samanta",
		description: "description for this book",
		published: 2000,
	},

	{
		id: 1,
		title: "history-book",
		author: "David",
		description: "Historical overview of events",
		published: 1780,
	}
];

app.get('/books', (req, res) => {
	res.send(books);
});

app.post('/book', (req, res) =>{
	const book = req.body;
	book.id = id++;
	books.push(book);

	res.send(book);
});

app.get('/book/:id', (req,res) => {
	let bookId = parseFloat(req.params.id, 10);
	let index = books.findIndex(book => book.id === bookId);
	res.send(books[index]);
});

app.delete("/book/:id", (req, res) => {
	let bookId = parseFloat(req.params.id, 10);
	let index = books.findIndex(book => book.id === bookId);
	books.splice(index, 1);
	res.send(books[index]);
});

app.listen(5000, () => {
	console.log("Listen app - 5000");
});