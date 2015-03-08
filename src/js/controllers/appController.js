require([
  "dojo/ready",
  "dojo/dom-style",
  "dojo/dom-attr",
  "dojo/dom",
  "dojo/on",
  "utils/loginmodule",
  "controllers/viewController",
  "dojo/domReady!"
], function (ready, domStyle, domAttr, dom, on, loginmodule, viewController) {

  ready(function () {

    
    loginmodule.doCheckLoginStatus(function (loggedIn) {
      viewController.doSetLoginView(loggedIn);
    });
    
    doSetEventHandlers();
    //domStyle.set("anonymousPanel", "display", "block");

  });

  function doSetEventHandlers() {
    on(dom.byId("signInBtn"), "click", handleSignIn);
    on(dom.byId("signOutBtn"), "click", handleSignOut);
  };


  function handleSignIn() {
    loginmodule.doOauthFormLogin(function (loggedIn) {
      viewController.doSetLoginView(loggedIn);
    });
  };

  function handleSignOut() {
    loginmodule.doOauthSignOut(function (loggedOut) {
      window.location.reload();
    });
  };

});