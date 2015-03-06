define([
  "dojo/ready",
  "dojo/dom-style",
  "dojo/dom-attr",
  "dojo/dom"
], function (ready, domStyle, domAttr, dom) {

  var view = {};

  ready(function () {
    //console.log('view module ready');
  });

  view.doSetLoginView = function (loggedIn) {
    loggedIn ? view.doShowSignOut() : view.doShowSignIn();
  };

  view.doShowSignIn = function () {
    domStyle.set("anonymousPanel", "display", "block");
    domStyle.set("personalizedPanel", "display", "none");
  };

  view.doShowSignOut = function () {
    domStyle.set("anonymousPanel", "display", "none");
    domStyle.set("personalizedPanel", "display", "block");
  };

  return view;
});