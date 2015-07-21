define([
  "dojo/ready",
  "dojo/on",
  "esri/arcgis/Portal",
  "esri/arcgis/OAuthInfo",
  "esri/IdentityManager",
  "models/modelmodule",
  "config/config",
  "dojo/domReady!"
], function(ready, on, arcgisPortal, OAuthInfo, esriId, modelmodule, config){
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
    esriId.checkSignInStatus(info.portalUrl).then(
      function (obj) {
        modelmodule.setCredentialObj(obj);
        login.getPortalObj(obj.server, function(portal){
          console.log(portal);
          modelmodule.setPortalObj(portal);
        });
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
      modelmodule.setCredentialObj(obj);
      login.getPortalObj(obj.server);
      callback(true);
    });
  };





  login.getPortalObj = function(url) {
    var pObj;
    var p = new arcgisPortal.Portal(url);
      on(p, 'load', function(){
        p.signIn().then(function (portalUser) {
          pObj = portalUser.portal;
          modelmodule.setPortalObj(pObj);
          esriConfig.defaults.io.corsEnabledServers.push( pObj.urlKey + "." + pObj.customBaseUrl );
        });
        //callback(pObj);
      });
  };

  login.doOauthSignOut = function (callback) {
    esriId.destroyCredentials();
    modelmodule.destroyCredentialObj();
    callback(true);
  };

  return login;

});