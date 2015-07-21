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
  "dojo/domReady!"
], function (ready, domStyle, domAttr, dom, on, loginmodule, modelmodule, viewController, portalController) {

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
      }
    });
  }

});