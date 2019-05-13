// Retrieve Account
function getAccountWithGUID() {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/accounts(77CFA141-5A75-E911-A81F-000D3A47CB1D)?$select=accountid,address1_line1,address1_line2,address1_line3,address1_telephone1,_createdby_value,createdon,emailaddress1", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var result = JSON.parse(this.response);
                var accountid = result["accountid"];
                var address1_line1 = result["address1_line1"];
                var address1_line2 = result["address1_line2"];
                var address1_line3 = result["address1_line3"];
                var address1_telephone1 = result["address1_telephone1"];
                var _createdby_value = result["_createdby_value"];
                var createdon = result["createdon"];
                var emailaddress1 = result["emailaddress1"];
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
}

/* -- RESULT ---
@odata.context:"https://gfordesandbox.crm4.dynamics.com/api/data/v9.1/$metadata#accounts(accountid,address1_line1,address1_line2,address1_line3,address1_telephone1,_createdby_value,createdon,emailaddress1)/$entity",
@odata.etag:"W/"2060264"",
accountid:"77cfa141-5a75-e911-a81f-000d3a47cb1d",
address1_line1:"3 Yeats Drive",
address1_line2:"Cranmore",
address1_line3:"Sligo Town",
address1_telephone1: null ,
_createdby_value:"46530259-003a-41b8-8185-185d6f35f2ef",
createdon:"2019-05-13T08:36:54Z",
emailaddress1:"fordeinc@outlook.com",
address1_composite:"3 Yeats Drive
Cranmore
Sligo Town"
 
 */