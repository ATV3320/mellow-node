const sdk = new ThirdwebSDK("sepolia");

const ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "alreadyExists",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "registerUser",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "register",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "togglePause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
const contract = sdk.getContract("0xb24c76b75D135F3206F8578d733686913034849f", ABI);



const filters = {
    fromBlock: -2000,
    toBlock: "latest",
  };
const res = async ()=>{
      // get All events
  const events = await contract.events.getAllEvents(filters);
  console.log(events[0].eventName);
  console.log(events[0].data);
}