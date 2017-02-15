var express = require('express');
var router = express.Router();
// Import config.js from the config directory. It holds our SQL creds
var config = require('../config/config');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : config.host,
  user     : config.username,
  password : config.password,
  database : config.database
});

connection.connect();

// get top 3 auctions

router.get('/getHomeAuctions', function(req, res, next) {
  var auctionsQuery = "SELECT * FROM auctions "
  + "INNER JOIN images ON images.auction_id = auctions.id "
  connection.query(auctionsQuery, (error, results, fields)=>{
    if (error) throw error;
    res.json(results);
  })

});

router.post('/register', (req, res, next)=>{
    checkDupeUserQuery = "SELECT * FROM users WHERE username= ?";
    connection.query(checkDupeUserQuery,[req.body.username], (error, results, fields)=>{
        if(results.length === 0){
          res.json(req.body)
        }else{
          
        }
    })
    res.json(req.body);
});

// make a register route to handle registration

router.post('/register', (req,res,next)=>{
  res.json(req.body)
});

module.exports = router;
