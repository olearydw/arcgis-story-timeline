require([
  "dojo/ready",
  "dojo/dom-style",
  "dojo/dom-attr",
  "dojo/dom",
  "dojo/on",
  "utils/loginmodule",
  "dojo/domReady!"
], function (ready, domStyle, domAttr, dom, on, loginmodule) {

  ready(function () {

    
    loginmodule.doCheckLoginStatus(function (loggedIn) {
      if (loggedIn) {
        // set up UI for the user that isn't signed in on app load
        domStyle.set("anonymousPanel", "display", "none");
        domStyle.set("personalizedPanel", "display", "block");
      } else {
        // set up the UI for the user that is signed in on app load
        domStyle.set("anonymousPanel", "display", "block");
        domStyle.set("personalizedPanel", "display", "none");
      };
    });
    
    doSetEventHandlers();
    domStyle.set("anonymousPanel", "display", "block");

  });

  function doSetEventHandlers() {
    on(dom.byId("sign-in"), "click", handleSignIn);
    on(dom.byId("sign-out"), "click", handleSignOut);
  };


  function handleSignIn() {
    loginmodule.doOauthFormLogin(function (loggedIn) {
      domStyle.set("anonymousPanel", "display", "none");
      domStyle.set("personalizedPanel", "display", "block");
    });
  };

  function handleSignOut() {
    loginmodule.doOauthSignOut(function (loggedOut) {
      window.location.reload();
    });
  };

});