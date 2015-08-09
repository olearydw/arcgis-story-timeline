require([
  "dojo/ready",
  "dojo/dom-style",
  "dojo/dom-attr",
  "dojo/dom",
  "dojo/on",
  "utils/loginmodule",
  "models/modelmodule",
  "controllers/viewController",
  "controllers/portalController",
  //"vis/vis.min",
  "dojo/domReady!"
], function (ready, domStyle, domAttr, dom, on, loginmodule, modelmodule, viewController, portalController) {

  var data = [
    {id: 1, content: 'item 1', start: '2013-04-20'},
    {id: 2, content: 'item 2', start: '2013-04-14'},
    {id: 3, content: 'item 3', start: '2013-04-18'},
    {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
    {id: 5, content: 'item 5', start: '2013-04-25'},
    {id: 6, content: 'item 6', start: '2013-04-27'}
  ];

  ready(function () {
    loginmodule.doCheckLoginStatus(function (loggedIn) {
      viewController.doSetLoginView(loggedIn);
      if(loggedIn) {
        doInitPortal();
      }
    });
    doSetEventHandlers();
  });

  function doSetEventHandlers() {
    on(dom.byId("signInBtn"), "click", handleSignIn);
    on(dom.byId("signOutBtn"), "click", handleSignOut);
  }

  function handleSignIn() {
    loginmodule.doOauthFormLogin(function (loggedIn) {
      viewController.doSetLoginView(loggedIn);
      doInitPortal();
    });
  }

  function handleSignOut() {
    loginmodule.doOauthSignOut(function (loggedOut) {
      if(loggedOut){
        window.location.reload();
      }
    });
  }

  function doInitPortal(){
    portalController.createPortalObj(function(isCreated){
      if(isCreated){
        var pObj = modelmodule.getPortalObj();
        var protocol = pObj.allSSL ? 'https://' : 'http://';
        var obj = {};
        obj.pName = pObj.name;

        if(pObj.isPortal){
          obj.pUrl = protocol + pObj.portalHostname;
        } else {
          obj.pUrl = protocol + pObj.urlKey + '.' + pObj.customBaseUrl;
        }
        viewController.doShowPortalInfo(obj);
        viewController.doShowTimeline(data);
      }
    });
  }

});