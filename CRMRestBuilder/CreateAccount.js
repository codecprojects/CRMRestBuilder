function CreateAccount() {
    var entity = {};
    entity.accountnumber = "1";
    entity.emailaddress1 = "info@codec.ie";
    entity.telephone1 = "+353 (0)1 603 4300";
    entity.name = "Codec-dss";
    entity.address1_line1 = "Hyde House";
    entity.address1_line2 = "Adelaide Street";
    entity.address1_line3 = "Dublin 2";

    var req = new XMLHttpRequest();
    req.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/accounts", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 204) {
                var uri = this.getResponseHeader("OData-EntityId");
                var regExp = /\(([^)]+)\)/;
                var matches = regExp.exec(uri);
                var newEntityId = matches[1];
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send(JSON.stringify(entity));
}