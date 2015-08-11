define([
  "dojo/ready",
  "dojo/on",
  "esri/arcgis/OAuthInfo",
  "esri/IdentityManager",
  "models/modelmodule",
  "config/config",
  "dojo/domReady!"
], function(ready, on, OAuthInfo, esriId, modelmodule, config){
  ready(function () {
    //console.log(config.appId);
  });

  var login = {};
  var info = new OAuthInfo({
    appId: config.appId,
    authNamespace: "portal_oauth_popup",
    expiration: 30,
    locale: "en-us",
    minTimeUntilExpiration: 60,
    popupCallbackUrl: "oauth-callback.html",
    portalUrl: config.portalUrl,
    popup: true
  });

  esriId.registerOAuthInfos([info]);

  login.doCheckLoginStatus = function (callback) {
    esriId.checkSignInStatus(info.portalUrl + "/sharing").then(
      function (obj) {
        modelmodule.setCredentialObj(obj);
        callback(true);
      }
    ).otherwise(
      function () {
        callback(false);
      });
  };

  login.doOauthFormLogin = function (callback) {
    esriId.getCredential(info.portalUrl + "/sharing", {
      oAuthPopupConfirmation: false
    }).then(function (obj) {
      modelmodule.setCredentialObj(obj);
      callback(true);
    });
  };

  login.doOauthSignOut = function (callback) {
    esriId.destroyCredentials();
    modelmodule.destroyCredentialObj();
    callback(true);
  };

  return login;
});