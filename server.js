const express        = require('express');
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port = 3333;
//var mysql            = require('mysql');
// var connection = mysql.createConnection({
//   host     : db.host,
//   user     : db.user,
//   password : db.password
// });

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
	var now = new Date();
  console.log('Start server ' + port + " " + now);
});

app.post('/create_tasks', (req, res) => {
	// if (this.connection == null) {
  //   this.connection.connect();
  // }
	console.log(req.body)
  const task = { text: req.body.body, title: req.body.title}

	res.send("Hello");
	});

app.post('/auth', (req, res) => {
	// if (this.connection == null) {
  //   this.connection.connect();
  // }
	console.log(req.body)
  const user = { mail: req.body.mail, password: req.body.password}
	res.send("Success");
	});

app.post('/reg', (req, res) => {
	// if (this.connection == null) {
	//   this.connection.connect();
	// }
	console.log(req.body)
	const user = { mail: req.body.mail, password: req.body.password}

	var user = {
	  user_id: "1",
	  user_name: "Булат",
		email: "good1hare@gmail.com"
	};

	var userJsonStr = JSON.stringify(user);

	res.send(user);
	});
