define([
  "dojo/ready",
  "dojo/dom-style",
  "dojo/dom-attr",
  "dojo/dom",
  "models/modelmodule",
  "utils/datesmodule"
], function (ready, domStyle, domAttr, dom, modelmodule, datesmodule) {

  var view = {};

  ready(function () {
    //console.log('view module ready');
  });

  view.doSetLoginView = function (loggedIn) {
    loggedIn ? view.doShowSignedIn() : view.doShowSignedOut();
  };

  view.doShowSignedIn = function () {
    domStyle.set("signInBtn", "display", "none");
    domStyle.set("signOutBtn", "display", "block");
    domStyle.set("loggedInDiv", "opacity", 1);

    var credObj = modelmodule.getCredentialObj();

    dojo.byId("serverUrl").innerHTML = "Server: " + credObj.server;
    dojo.byId("userName").innerHTML = "User Id: <span>" + credObj.userId + "</span>";
    dojo.byId("createTime").innerHTML = "Created: <span>" + datesmodule.formatDateToUTC(new Date(credObj.creationTime)) + "</span>";
    dojo.byId("expireTime").innerHTML = "Expires: <span>" + datesmodule.formatDateToUTC(new Date(credObj.expires)) + "</span>";
    dojo.byId("isSSL").innerHTML = "Is SSL: <span>" + credObj.ssl + "</span>";
    dojo.byId("myToken").innerHTML = "Token: <span>" + credObj.token + "</span>";




  };

  view.doShowSignedOut = function () {
    domStyle.set("signInBtn", "display", "block");
    domStyle.set("signOutBtn", "display", "none");
    domStyle.set("loggedInDiv", "opacity", 0);

    dojo.byId("serverUrl").innerHTML = "";
    dojo.byId("userName").innerHTML = "";
    dojo.byId("createTime").innerHTML = "";
    dojo.byId("expireTime").innerHTML = "";
    dojo.byId("myToken").innerHTML = "";
  };

  return view;
});