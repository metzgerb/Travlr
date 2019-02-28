var mysql = require('mysql');
var pool = mysql.createPool({
   connectionLimit   : 10,
   host              : 'classmysql.engr.oregonstate.edu',
   user              : 'cs361_metzgerb',
   password          : '8545',
   database          : 'cs361_metzgerb'
});

module.exports.pool = pool;
