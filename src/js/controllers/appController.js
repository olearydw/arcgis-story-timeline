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
    doSetEventHandlers();
    doInitApp();
  });

  function doSetEventHandlers() {
    console.log('SET UP EVENT HANDLERS');
    //on(dom.byId("signInBtn"), "click", handleSignIn);
    //on(dom.byId("signOutBtn"), "click", handleSignOut);
  }

  function handleSignIn() {
    loginmodule.doOauthFormLogin(function (loggedIn) {
      console.log(loggedIn);
      if(loggedIn) {
        //
      }
      //viewController.doSetLoginView(loggedIn);
      //doInitPortal();
    });
  }



  function doInitApp(){
    console.log('APP INITIALIZED');
    viewController.doShowTimeline(modelmodule.getTimelineDataSet());
  }

});