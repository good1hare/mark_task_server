const express        = require('express');
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port = 3333;
var iconv = require('iconv');
var mysql            = require('mysql');
var connection = mysql.createConnection({
  host     : db.host,
  user     : db.user,
  password : db.password,
	database : db.database
});

connection.connect();

var encoder = new iconv.Iconv('latin1', 'utf-8');

// will encode result and pipe it to your terminal
query.pipe(encoder.pipe(process.stdout));

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
	var now = new Date();
  console.log('Start server ' + port + " " + now);
});

app.post('/create_task', (req, res) => {
	console.log(req.body)
  const task = { task_name: req.body.task_name, task_desc: req.body.task_desc, task_exec: req.body.task_exec}
	connection.query("insert into tasks (task_name, task_desc, task_exec, task_percent) values ('" + task.task_name + "','" + task.task_desc + "','" + task.task_exec + "', '0');", function(err, rows, fields) {
		});
	res.send("0");
	});

app.post('/auth', (req, res) => {
	console.log(req.body)
  const user = { login: req.body.login, password: req.body.password}

	connection.query("SELECT * FROM mark_task.users WHERE user_email='" + user.login + "';", function(err, result, fields) {
		//console.log(JSON.stringify(result))

		var userForSend = {
			user_id: result[0].user_id,
			user_name: result[0].user_name,
			email: result[0].user_email,
			error: "0"
		};

		console.log(userForSend);
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

	app.post('/get_tasks', (req, res) => {
		console.log(req.body)
	  const task_exec = { task_exec: req.body.task_exec}

		connection.query("SELECT * FROM mark_task.tasks;", function(err, result, fields) {
			console.log(JSON.stringify(result))

			res.send(JSON.stringify(result));
		});
		});
