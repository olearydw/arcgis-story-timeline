define([
  "dojo/ready"
], function (ready) {

  var model = {};
  var credentialObj = {};
  var myPortal = {};

  ready(function () {
    //model module ready
  });

  model.setCredentialObj = function (cObj) {
    credentialObj = cObj;
  };

  model.getCredentialObj = function () {
    return credentialObj;
  };

  model.setPortalObj = function (pObj) {
    console.log(pObj);
    myPortal = pObj;
  };

  model.getPortalObj = function() {
    return myPortal;
  };

  model.destroyCredentialObj = function () {
    credentialObj = {};
  };

  return model;

});