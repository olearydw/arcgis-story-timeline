define([
  "dojo/ready",
  "dojo/store/Memory"
], function (ready, Memory) {

  var model = {};
  var credentialObj = {};
  var myPortal = {};
  var timelineArr;
  var timelineItemsStore;

  ready(function () {
    //model module ready
    initModelItems();
  });

  model.setCredentialObj = function (cObj) {
    credentialObj = cObj;
  };

  model.getCredentialObj = function () {
    return credentialObj;
  };

  model.setPortalObj = function (pObj) {
    myPortal = pObj;
  };

  model.getPortalObj = function() {
    return myPortal;
  };

  model.destroyCredentialObj = function () {
    credentialObj = {};
  };

  model.getTimelineDataSet = function () {
    return timelineArr;
  };

  model.getTimelineItemInfos = function(val) {
    var itemInfo;
    var i = timelineItemsStore.query({ id: val });
    itemInfo = i.total > 0 ? i[0] : false;
    return itemInfo;
  };

  function initModelItems(){
    timelineArr = [
      {id: 1, content: 'item 1', start: '2013-04-20'},
      {id: 2, content: 'item 2', start: '2013-04-14'},
      {id: 3, content: 'item 3', start: '2013-04-18'},
      {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
      {id: 5, content: 'item 5', start: '2013-04-25'},
      {id: 6, content: 'item 6', start: '2013-04-27'}
    ];

    var timelineItemsArr = [
      {
        id: 1,
        url: 'http://esrifederal.maps.arcgis.com/apps/StorytellingTextLegend/index.html?appid=6b04bbf475bd4f3b8bbf4bd9527afc43',
        type: 'app'
      },
      {
        id: 2,
        url: 'http://esrifederal.maps.arcgis.com/apps/StorytellingTextLegend/index.html?appid=6b04bbf475bd4f3b8bbf4bd9527afc43',
        type: 'app'
      },
      {
        id: 3,
        url: 'http://esrifederal.maps.arcgis.com/apps/StorytellingTextLegend/index.html?appid=6b04bbf475bd4f3b8bbf4bd9527afc43',
        type: 'app'
      },
      {
        id: 4,
        url: 'http://esrifederal.maps.arcgis.com/apps/StorytellingTextLegend/index.html?appid=6b04bbf475bd4f3b8bbf4bd9527afc43',
        type: 'app'
      },
      {
        id: 5,
        url: 'http://esrifederal.maps.arcgis.com/apps/StorytellingTextLegend/index.html?appid=6b04bbf475bd4f3b8bbf4bd9527afc43',
        type: 'app'
      },
      {
        id: 6,
        url: 'http://esrifederal.maps.arcgis.com/apps/StorytellingTextLegend/index.html?appid=6b04bbf475bd4f3b8bbf4bd9527afc43',
        type: 'app'
      }
    ];

    timelineItemsStore = new Memory({ data: timelineItemsArr, idProperty: 'id' });

  }

  return model;
});