define([
  "dojo/ready",
  "dojo/on",
  "esri/arcgis/Portal",
  "models/modelmodule"
], function (ready, on, arcgisPortal, modelmodule) {

  var portal = {};

  ready(function () {
    //console.log('portal module ready');
  });

  portal.createPortalObj = function(callback) {
    var credObj = modelmodule.getCredentialObj();
    var pObj;
    var p = new arcgisPortal.Portal(credObj.server);
    on(p, 'load', function(){
      p.signIn().then(function (portalUser) {
        pObj = portalUser.portal;
        modelmodule.setPortalObj(pObj);
        esriConfig.defaults.io.corsEnabledServers.push( pObj.urlKey + "." + pObj.customBaseUrl );
        callback(true);
      });
    });

  };

  return portal;
});