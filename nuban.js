const axios = require('axios')

axios({
	method: 'get',
	baseURL: 'https://sandboxapi.fsi.ng',
	url: '/sterling/TransferAPIs/api/Spay/InterbankNameEnquiry?',
	params: {
		  Referenceid: "01",
		  RequestType: "01",
		  Translocation: "01",
		  ToAccount: "0037514056",
		  destinationbankcode: "000001"
		},
	headers: {
		"Sandbox-Key": "35e66ac0cb16ba7e5985b3684e4dba28",
		"Ocp-Apim-Subscription-Key": "t",
		"Ocp-Apim-Trace": "true",
		"Appid": "69",
		"Content-Type": "application/json",
		"ipval": 0
		}
	})
	.then((response) => console.log(response.data))
    .catch((error) => console.log(error))
    
