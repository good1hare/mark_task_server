const express        = require('express');
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port = 3333;
var mysql            = require('mysql');
var connection = mysql.createConnection({
  host     : db.host,
  user     : db.user,
  password : db.password,
	database : db.database
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
	var now = new Date();
  console.log('Start server ' + port + " " + now);
});

app.post('/create_tasks', (req, res) => {
	console.log(req.body)
  const task = { text: req.body.body, title: req.body.title}

	res.send("Hello");
	});

app.post('/auth', (req, res) => {
	//console.log(req.body)
  const user = { login: req.body.login, password: req.body.password}

	connection.query("SELECT * FROM mark_task.users WHERE user_email='" + user.login + "';", function(err, result, fields) {
		console.log(JSON.stringify(result))
		var userInfoJsonStr = JSON.stringify(result);

		var userInfo = {
			user_id: "0",
			user_name: "0",
			user_email: "0",
			user_password: "0"
		};



		userInfo = JSON.parse(userInfoJsonStr);

		var userForSend = {
			user_id: userInfo.user_id,
			user_name: userInfo.user_name,
			email: userInfo.user_email,
			error: "0"
		};

		console.log(userInfo);
		res.send(JSON.stringify(userForSend));
	});
	});

app.post('/reg', (req, res) => {
	console.log(req.body)
	const user = { email: req.body.mail, password: req.body.password, name: req.body.name}

	connection.query("insert into users (user_name, user_email, user_password) values ('" + user.name + "','" + user.email + "','" + user.password + "');", function(err, rows, fields) {
	  });

	var userInfo = {
	  user_id: "0",
	  user_name: "0",
		email: "0",
		error: "0"
	};
	res.send(userInfo);
	});
