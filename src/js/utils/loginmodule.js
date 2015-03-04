define([
  "dojo/ready",
  "esri/arcgis/Portal",
  "esri/arcgis/OAuthInfo",
  "esri/IdentityManager",
  "dojo/domReady!"
], function(ready, arcgisPortal, OAuthInfo, esriId){
  ready(function () {
    //console.log('ready in the loginmodule');
  });

  var login = {};
  var info = new OAuthInfo({
    appId: "yGaPXbbzACYnaKJQ",
    authNamespace: "portal_oauth_popup",
    expiration: 120,
    locale: "en-us",
    minTimeUntilExpiration: 20,
    popupCallbackUrl: "oauth-callback.html",
    portalUrl: "https://www.arcgis.com",
    popup: true
  });

  esriId.registerOAuthInfos([info]);

  login.doCheckLoginStatus = function (callback) {
    esriId.checkSignInStatus(info.portalUrl).then(
      function (obj) {
        console.log(obj);
        callback(true);
      }
    ).otherwise(
      function () {
        callback(false);
      });
  };

  login.doOauthFormLogin = function (callback) {
    esriId.getCredential(info.portalUrl, {
      oAuthPopupConfirmation: false
    }).then(function (obj) {
      console.log(obj);
      callback(true);
    });
  };

  login.doOauthSignOut = function (callback) {
    esriId.destroyCredentials();
    callback(true);
  }

  return login;

});