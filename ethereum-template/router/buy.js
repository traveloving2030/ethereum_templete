var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var product_contract = require('../contract/product/contract.js');
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
var smartContract = new web3.eth.Contract(product_contract.abi, product_contract.address);


router.post('/', function (req, res, next) {
    //  console.log(req.session.account);

    smartContract.methods.buyProduct(req.body.owner, req.session.account, req.body.money).send({
        from: req.session.account,
        gas: 2000000
    }).then(function (receipt) {
        web3.eth.sendTransaction({
            from: req.session.account,
            to: req.body.owner,
            value: '1000000000000000'
        })
        res.redirect('/items');
    });
})



module.exports = router;
