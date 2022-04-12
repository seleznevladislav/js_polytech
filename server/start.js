const http = require('http');
const os = require('os');
const greeting = require('./greeting');
const url = require('url');
let port = 3000;
let userName = os.userInfo().username;
http
		.createServer(function (request, response) {
			const queryObject = url.parse(request.url, true).query;

			const a = Number(queryObject["a"]);
 		  const b = Number(queryObject["b"]);

			 const obj = {
				add: a + b,
				sub: a - b,
				div: a / b,
				mul: a * b,
			};

			if (!a || !b) {
				response.statusCode = 400;
		
				const error = {
					status: response.statusCode,
					message: "could not parse two numbers: a, b",
				};
		
				response.end(JSON.stringify(error, null, 4));
			}

			console.log("Пользователь подключился");
			console.log("Тип запроса: " + request.method);
			
			response.write(greeting.getMessage(userName));
			response.end(JSON.stringify(obj, null, 4));
		})
		.listen(port, '127.0.0.1', function(){
			console.log(`Сервер начал прослушивание на порту ${port}`);
		})