const express = require('express')
const app = express()

// var fonction = function(req, res){
// }


app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(express.static('node_modules'));


app.get('/' , function(req, res){
	res.render("accueil")
});
app.get('/accueil', function(req, res){
	res.render("accueil")
});


app.get('/list', function(req, res){
	res.render('index');
});

app.listen(3000);