var express = require('express');
var router = express.Router();
require('dotenv').config()
const pw = process.env.PASSWORD


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let store = {alpha: 4, bravo: 3, chalie: 2, delta: 4, echo: 3}

router.post('/point_up', (req, res) => {
  if(req.body.team){
   store[req.body.team]++
      res.send(store)
  } else {
      res.send(404)
 }
})

router.get('/point', (req, res) => {
    res.send(store)
})

router.post("/login", (req, res) => {
    if(req.body.pw === pw){
        res.send(true)
    } else {
        res.send(false)
    }
})



module.exports = router;
