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
    domStyle.set("signInBtn", "display", "block");
    domStyle.set("signOutBtn", "display", "none");
  };

  view.doShowSignOut = function () {
    domStyle.set("signInBtn", "display", "none");
    domStyle.set("signOutBtn", "display", "block");
  };

  return view;
});