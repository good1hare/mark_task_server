const express        = require('express');
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port = 8000;
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : db.host,
  user     : db.user,
  password : db.password
});

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
	var now = new Date();
  console.log('Start server ' + port + " " + now);
});

app.post('/create_tasks', (req, res) => {
	connection.connect();
	console.log(req.body)
  const task = { text: req.body.body, title: req.body.title}

  connection.query('', function(err, rows, fields) {
	  if (err) throw err;
	  console.log('The solution is: ', rows[0].solution)
  connection.end();
	});
	res.send("Hello");
	});
