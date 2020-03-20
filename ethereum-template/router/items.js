var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var product_contract = require('../contract/product/contract.js');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
var smartContract = new web3.eth.Contract(product_contract.abi, product_contract.address);



// index
router.get('/', function (req, res, next) {

  res.render('items', { title: 'item', pro_name: 'nothing', pro_loc: 'nothing' })
})



// create

router.post('/', function (req, res, next) {
  console.log(smartContract);
  const pronumber = req.body.pronumber;
  const proname = req.body.name;
  const proloc = req.body.proloc;

  smartContract.methods.addProStru(
    proname,
    proloc,
    pronumber,
    { from: req.session.account, gas: 2000000 },
    (err, result) => {
      if (!err) {
        alert('트랜잭션이 성공적으로 전송되었습니다.\n' + result);
        // res.redirect("/items")
        res.render('items', { title: 'item', pro_name: pronumber, pro_loc: proloc })
      }
    }
  );


})





module.exports = router;
