define([
  "dojo/ready",
  "dojo/dom-style",
  "dojo/dom-attr",
  "dojo/dom",
  "dojo/dom-construct",
  "dojo/query",
  "models/modelmodule",
  "utils/datesmodule",
  "vis/vis.min"
], function (ready, domStyle, domAttr, dom, domConstruct, query, modelmodule, datesmodule, vis) {

  var view = {};

  ready(function () {
    //console.log('view module ready');
  });

  view.doSetLoginView = function (loggedIn) {
    loggedIn ? view.doShowSignedIn() : view.doShowSignedOut();
  };

  view.doShowSignedIn = function () {
    var credObj;
    /*
    domStyle.set("signInBtn", "display", "none");
    domStyle.set("signOutBtn", "display", "block");
    domStyle.set("loggedInDiv", "opacity", 1);
    query("#navTabs > li").removeClass("hidden");
    credObj = modelmodule.getCredentialObj();
    dojo.byId("serverUrl").innerHTML = "Server: " + credObj.server;
    dojo.byId("userName").innerHTML = "User Id: <span>" + credObj.userId + "</span>";
    dojo.byId("createTime").innerHTML = "Created: <span>" + datesmodule.formatDateToUTC(new Date(credObj.creationTime)) + "</span>";
    dojo.byId("expireTime").innerHTML = "Expires: <span>" + datesmodule.formatDateToUTC(new Date(credObj.expires)) + "</span>";
    dojo.byId("isSSL").innerHTML = "Is SSL: <span>" + credObj.ssl + "</span>";
    dojo.byId("myToken").innerHTML = "Token: <span>" + credObj.token + "</span>";
    */
  };

  view.doShowPortalInfo = function(obj) {
    /*
    domStyle.set("portalInfoDiv", "opacity", 1);
    dojo.byId("portalUrl").innerHTML = "Portal: " + obj.pUrl;
    dojo.byId("portalName").innerHTML = "Portal Name:  <span>" + obj.pName  + "</span>";
    */
  };

  view.doShowSignedOut = function () {
    /*
    domStyle.set("signInBtn", "display", "block");
    domStyle.set("signOutBtn", "display", "none");
    domStyle.set("loggedInDiv", "opacity", 0);
    dojo.byId("serverUrl").innerHTML = "";
    dojo.byId("userName").innerHTML = "";
    dojo.byId("createTime").innerHTML = "";
    dojo.byId("expireTime").innerHTML = "";
    dojo.byId("myToken").innerHTML = "";
    */
  };

  view.doShowTimeline = function(data, group) {
    var container = dojo.byId('timeline');
    var options = {
      width: '100%',
      height: '350px',
      start: new Date(1990,1,1),
      end: new Date(2000,1,1),
      selectable: true,
      multiselect: false
    };
    var groups = new vis.DataSet(group);
    var dataSet = new vis.DataSet(data);
    var timeline = new vis.Timeline(container, dataSet, groups, options);

    timeline.on('select', function(props){
      var selectedItem = modelmodule.getTimelineItemInfos(props.items[0]);
      if(selectedItem) {
        view.doUpdateStage(selectedItem);
      }
    })
  };

  view.doUpdateStage = function(obj) {
    view.doCreateEmbedFragment(obj, function(embed){
      var val = embed;
      var pic = val.indexOf("hero-unit");
      domConstruct.empty("mainStageDiv");
      domConstruct.place(embed, "mainStageDiv", "first");

      if(pic === -1){
        console.log('hero unit val', pic);
        domStyle.set("hero-unit-id", "backgroundImage", "url('assets/img/loading.gif')");
      }




    })
  };

  view.doCreateEmbedFragment = function(obj, callback) {
    console.log(obj);
    var html;

    if(obj.type === undefined) {
      return;
    } else if(obj.type === 'image') {
      html = '<div id="hero-unit-id" class="hero-unit"></div>';
    } else {
      html = '<iframe width="100%" height="450px" src="' + obj.url + '" frameborder="0"></iframe>';
    }
    callback(html);
  };

  return view;
});