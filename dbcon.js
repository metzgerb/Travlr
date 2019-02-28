var mysql = require('mysql');
var pool = mysql.createPool({
   connectionLimit   : 10,
   host              : 'YOUR_HOST',
   user              : 'YOUR_USER',
   password          : 'YOUR_PASSWORD',
   database          : 'YOUR_DATABASE'
});

module.exports.pool = pool;
