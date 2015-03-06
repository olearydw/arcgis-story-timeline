define([
  "dojo/ready"
], function (ready) {

  var model = {};
  var credentialObj = {};




  ready(function () {

  });


  model.setCredentialObj = function (cObj) {
    credentialObj = cObj;
    console.log(credentialObj);
  };

  model.destroyCredentialObj = function () {
    credentialObj = {};
  };

  return model;

});