module.exports = function(app, db) {
	app.post('/tasks', (req, res) => {
    console.log(req.body)
    const task = { text: req.body.body, title: req.body.title}
  	db.collection('tasks').insert(task, (err, results) => {
  		if (err) { 
        	res.send({ 'error': 'An error has occurred' }); 
      	} else {
        	res.send(result.ops[0]);
      	}
  	});
  });
};