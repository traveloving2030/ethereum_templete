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
  //  console.log(req.session.account);

  smartContract.methods.addProStru(req.body.proname,req.body.proloc,req.body.pronumber).send({
      from: req.session.account, 
      gas: 2000000}).then(function(receipt){
        // console.log(receipt);
        res.render('items', { title: 'item', pro_name: req.body.pronumber, pro_loc: req.body.proloc });
      });

})





module.exports = router;
