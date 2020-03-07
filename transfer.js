const axios = require('axios')

axios({
	method: 'post',
	baseURL: 'https://sandboxapi.fsi.ng',
	url: '/sterling/accountapi/api/Spay/InterbankTransferReq',
	data: {
        Referenceid: '0101',
        RequestType: '0101',
        Translocation: '0101',
        SessionID: '01',
        FromAccount: '01',
        ToAccount: '01',
        Amount: '01',
        DestinationBankCode: '01',
        NEResponse: '01',
        BenefiName: '01',
        PaymentReference: '01',
        OriginatorAccountName: '01',
        translocation: '01'
		},
	headers: {
		"Sandbox-Key": "35e66ac0cb16ba7e5985b3684e4dba28",
		'Ocp-Apim-Subscription-Key': 't',
      'Ocp-Apim-Trace': 'true',
      "Content-Type":"application/json",
      Appid: '69',
      ipval: '0'
		}
	})
	.then((response) => console.log(response.data))
	.catch((error) => console.log(error.response.data))

