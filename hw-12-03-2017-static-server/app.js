const http = require('http'),
	fs = require("fs"),
	path = require('path');

const server = http.createServer((request, response) => {
	console.log("Connected", request.headers);

	takeHeaders(request.url).
		then(res => {
			response.setHeader('content-type', res.contentType);
			response.end(res.data);
		}).
		catch(status =>{
			response.statusCode = status;
			response.end();
		});
});

function takeHeaders(url) {
	if(url === "/") {
		url = "index.html";
	}

	return new Promise(function(res, rej){
		fs.readFile(`${__dirname}/public/${url}`,'utf8',(err, data) =>{
			if(err) return rej(404);

			let contentType = null,
				extname = path.extname(url),
				extOnlyLetter = extname.split(/\./).join("");

			switch(extname) {
				case ".html": contentType = `text/${extOnlyLetter}`;
				break;

				case ".css": contentType = `text/${extOnlyLetter}`;
				break;

				case ".js": contentType = `aplication/${extOnlyLetter}`;
				break;

				default: contentType = `text/${extOnlyLetter}`;
			}

			res({data, contentType});
		});
	});
}

server.listen(3000, ()=>{
	console.log("Listen 3000");
})