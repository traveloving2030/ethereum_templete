var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var product_contract = require('../contract/product/contract.js');

var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
var smartContract = new web3.eth.Contract(product_contract.abi, product_contract.address);



// index
router.get('/', function (req, res, next) {
  var pro_array=new Array();
  smartContract.methods.getNumOfProducts().call({from: req.session.account}).then(function(total_num){
    

    for(let i=0; i<total_num; i++){
      smartContract.methods.getProductStruct(i).call({from: req.session.account}).then(function(pro_info){
        // console.log(pro_info);
        pro_array.push(pro_info);
      
      })
    }

    setTimeout(()=>{
      // console.log(pro_array);
      // for(let i=0; i<pro_array.length; i++){
      //   console.log(pro_array[i][0]);
      // }
      pro_array.forEach(function(element, index, array){
        
        console.log(element[0]);
      })

      res.render('items', { title: 'item', pro_name: 'nothing', pro_loc: 'nothing', total_num:total_num, item:pro_array });
    },100);
    
    
  
})
 
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

// show
router.get('/:id', function(req, res, next){
    console.log("[SHOW GET]item id: " + req.params.id);
    // Item.findOne({ itemId: req.params.id }, (err, item)=>{
    //     if(err) return console.log(err);
    //     res.render('show', {title: "item 조회", item: item, user: req.user})
    // })
        res.render('show', {title: "item 조회" ,itemId: req.params.id})

})





module.exports = router;
