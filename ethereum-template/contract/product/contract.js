

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0xd7cc1Da53CaE363CB34795fa1891Fc7a137Be58b';
//use the ABI from your contract
const abi = [
	{
		"constant": false,
		"inputs": [
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productes",
		"outputs": [
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
	}
];
module.exports={address, abi};
