

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0x73065abeC098F56331f656f8d285d244218D315f';
//use the ABI from your contract
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_proCreator",
				"type": "address"
			},
			{
				"name": "_firstString",
				"type": "string"
			},
			{
				"name": "_secondString",
				"type": "string"
			},
			{
				"name": "_initNumber",
				"type": "uint256"
			}
		],
		"name": "addProStru",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_buyer",
				"type": "address"
			},
			{
				"name": "_status",
				"type": "bool"
			}
		],
		"name": "buyProduct",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "productName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "location",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "number",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "product",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNumOfProducts",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getProductStruct",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getPurchaseInfo",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productes",
		"outputs": [
			{
				"name": "creator",
				"type": "address"
			},
			{
				"name": "productName",
				"type": "string"
			},
			{
				"name": "locaton",
				"type": "string"
			},
			{
				"name": "number",
				"type": "uint256"
			},
			{
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "purchase",
		"outputs": [
			{
				"name": "buyer",
				"type": "address"
			},
			{
				"name": "status",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
module.exports={address, abi};
