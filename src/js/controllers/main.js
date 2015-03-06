require([
  "dojo/ready",
  "dojo/dom-style",
  "dojo/dom-attr",
  "dojo/dom",
  "dojo/on",
  "utils/loginmodule",
  "utils/viewmodule",
  "dojo/domReady!"
], function (ready, domStyle, domAttr, dom, on, loginmodule, viewmodule) {

  ready(function () {

    
    loginmodule.doCheckLoginStatus(function (loggedIn) {
      viewmodule.doSetLoginView(loggedIn);
    });
    
    doSetEventHandlers();
    //domStyle.set("anonymousPanel", "display", "block");

  });

  function doSetEventHandlers() {
    on(dom.byId("sign-in"), "click", handleSignIn);
    on(dom.byId("sign-out"), "click", handleSignOut);
  };


  function handleSignIn() {
    loginmodule.doOauthFormLogin(function (loggedIn) {
      viewmodule.doSetLoginView(loggedIn);
    });
  };

  function handleSignOut() {
    loginmodule.doOauthSignOut(function (loggedOut) {
      window.location.reload();
    });
  };

});