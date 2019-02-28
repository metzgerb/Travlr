var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');
var request = require('request');
var mysql = require('./dbcon.js');
var moment = require('moment');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 1234);
app.use(express.static('static'));

//render GET for homepage
app.get('/',function(req,res,next){    
	res.render('home');
});

app.post('/reader/checkout',function(req,res,next){ 
	res.render('stuff');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://flip3.engr.oregonstate.edu:' + app.get('port') + '; press Ctrl-C to terminate.');
});

/**
 * Get the number of days in any particular month
 * @link https://stackoverflow.com/a/1433119/1293256
 * @param  {integer} m The month (valid: 0-11)
 * @param  {integer} y The year
 * @return {integer}   The number of days in the month
 */
var daysInMonth = function (m, y) {
    switch (m) {
        case 1 :
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 8 : case 3 : case 5 : case 10 :
            return 30;
        default :
            return 31
    }
};

/**
 * Check if a date is valid
 * @link https://stackoverflow.com/a/1433119/1293256
 * @param  {[type]}  d The day
 * @param  {[type]}  m The month
 * @param  {[type]}  y The year
 * @return {Boolean}   Returns true if valid
 */
var isValidDate = function (d, m, y) {
    m = parseInt(m, 10) - 1;
    return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
};