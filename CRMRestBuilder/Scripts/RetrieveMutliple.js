// JavaScript source code
function RetrieveMultipleContactsWithCInEmail() {
    var req = new XMLHttpRequest();
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/contacts?$select=firstname&$filter=contains(emailaddress1, 'c')", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var results = JSON.parse(this.response);
                for (var i = 0; i < results.value.length; i++) {
                    var firstname = results.value[i]["firstname"];
                }
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
}

/*--RESULT
 {
@odata.context:"https://gfordesandbox.crm4.dynamics.com/api/data/v9.1/$metadata#contacts(firstname)",
value:  [
    {
                @odata.etag:"W/"2060327"",
                firstname:"Giles",
                contactid:"27fa4c14-5875-e911-a81f-000d3a47cb1d"
            },
            {
                @odata.etag:"W/"2060333"",
                firstname:"John",
                contactid:"3f629fcd-6375-e911-a81f-000d3a47cb1d"
            }
         ]
    }
 */