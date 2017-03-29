;(function(){
	let booksContainer = document.querySelector(".books-container"),
		addBookContainer = document.querySelector(".add-book-container"),
		singleBook = document.querySelector(".single-book"),
		mainPage = document.querySelector("#main-page"),
		addBook = document.querySelector("#addBook"),
		form = document.querySelector(".add-book-container form"),
		remove = document.querySelector("#remove");


	fetch("/books").
		then(res => res.json()).
		then(res => {
			console.log(res);
			createBookHtml(res);
		}).
		catch(e => console.error(e));


	function createBookHtml(book) {

		let fragment = document.createDocumentFragment();

		book.forEach(el => {

			let itemWrapper = document.createElement("div"),
				bookTitle = document.createElement("h2"),
				bookTitleLink = document.createElement("a"),
				bookDescription = document.createElement("p"),
				bookAuthor = document.createElement("p"),
				bookPublished = document.createElement("p");

			itemWrapper.className = "book-item";
			bookTitle.className = "title";
			bookDescription.className = "description";
			bookAuthor.className = "author";
			bookPublished.className = "published";
			bookTitleLink.setAttribute("href", `/book/${el.id}`);
			bookTitleLink.setAttribute("data-id", el.id);

			bookTitleLink.textContent = `Title: ${el.title}`;
			bookDescription.textContent = `Description: ${el.description}`;
			bookAuthor.textContent = `Author: ${el.author}`;
			bookPublished.textContent = `Published: ${el.published}`;

			bookTitle.appendChild(bookTitleLink);
			itemWrapper.appendChild(bookTitle);
			itemWrapper.appendChild(bookDescription);
			itemWrapper.appendChild(bookAuthor);
			itemWrapper.appendChild(bookPublished);

			fragment.appendChild(itemWrapper);
		});
		
		booksContainer.appendChild(fragment);
	}

	addBook.addEventListener("click", showForm);
	mainPage.addEventListener("click", showBooks);
	form.addEventListener("submit", addNewBook);
	booksContainer.addEventListener("click", singleBookPage);
	remove.addEventListener("click", removeBook);

	function showForm(ev) {
		ev.preventDefault();
		addBookContainer.hidden = false;
		booksContainer.hidden = true;
		singleBook.hidden = true;
	}

	function showBooks(ev) {
		ev.preventDefault();
		addBookContainer.hidden = true;
		booksContainer.hidden = false;
		singleBook.hidden = true;
	}

	function addNewBook(ev) {
		ev.preventDefault();

		let title = form.querySelector("#title").value;

		let	description = form.querySelector("#description").value;

		let	author = form.querySelector("#author").value;

		let	published = form.querySelector("#published").value;

		fetch("/book", {
			method: "POST",
			body: JSON.stringify({ title, description, author, published }),
			headers: {
				"content-type": "application/json"
			}
		}).
		then(res => res.json()).
		then(res => {
			console.log(res);
		}).
		catch(e => console.log(e));

		form.querySelector("#title").value = "";
		form.querySelector("#description").value = "";
		form.querySelector("#author").value = "";
		form.querySelector("#published").value = "";
	}

	function singleBookPage(ev) {
		ev.preventDefault();

		if(ev.target.tagName !== 'A') return;

		addBookContainer.hidden = true;
		booksContainer.hidden = true;
		singleBook.hidden = false;

		let bookId = ev.target.getAttribute('data-id');

		fetch(`/book/${bookId}`).
			then(res => res.json()).
			then(res => {
				console.log(res);
				renderSingleBook(res);
			}).
			catch(e => console.error(e));
	}

	function renderSingleBook(ev) {

		let singleTitle = document.querySelector('.single-title'),
			singleDescr = document.querySelector('.single-description'),
			singleAuthor = document.querySelector('.single-author'),
			singlePublished = document.querySelector('.single-published'),
			id = document.querySelector(".id");

		singleTitle.textContent = ev.title;
		singleDescr.textContent = ev.description;
		singleAuthor.textContent = ev.author;
		singlePublished.textContent = ev.published;
		id.textContent = ev.id;
	}

	function removeBook (ev) {
		ev.preventDefault();

		let bookId = document.querySelector(".id").innerHTML;
		console.log(bookId);

		fetch(`/book/${bookId}`, {
			method: "DELETE"
		}).
		then(res => res.json()).
		then(res => console.log(res)).
		catch(e => console.error(e));

		addBookContainer.hidden = true;
		booksContainer.hidden = false;
		singleBook.hidden = true;
	}
})();