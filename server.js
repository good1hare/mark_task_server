const express        = require('express');
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port = 1234;
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
	if (this.connection == null) {
    this.connection.connect();
  }
	console.log(req.body)
  const task = { text: req.body.body, title: req.body.title}

	res.send("Hello");
	});

app.post('/auth', (req, res) => {
	if (this.connection == null) {
    this.connection.connect();
  }
	console.log(req.body)
  const idToken = { text: req.body.token}
	res.send("Success");
	});
