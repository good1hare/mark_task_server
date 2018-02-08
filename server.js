const express        = require('express');
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();
const port = 8000;
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'dbuser',
  password : 's3kreee7'
});

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
	var now = new Date();
  console.log('Start server ' + port + " " + now);
});

app.post('/create_tasks', (req, res) => {
	connection.connect();
	connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
	  if (err) throw err;
	  console.log('The solution is: ', rows[0].solution);
	});

connection.end();
  console.log(req.body)
  const task = { text: req.body.body, title: req.body.title}
	// db.collection('tasks').insert(task, (err, results) => {
	// 	if (err) {
  //     	res.send({ 'error': 'An error has occurred' });
  //   	} else {
  //     	res.send(result.ops[0]);
  //   	}
	res.send("Hello");
	});
