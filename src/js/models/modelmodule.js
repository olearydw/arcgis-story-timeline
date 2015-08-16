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
    //'box' (default), 'point', 'range', 'rangeoverflow'
    timelineArr = [
      {
        id: 1,
        start: new Date(1990,6,1),
        content: 'China/Iran enter 10 yr nuclear agreement', type:'point'
      },
      {
        id: 2,
        start: new Date(1992,6,1),
        end: new Date(1998,6,1),
        content: 'US states nuclear activity is civil only'
      },
      {
        id: 3,
        start: new Date(1994,6,1),
        content: 'China installs first nuclear research reactor in Iran',
        type:'point'
      },
      {
        id: 4,
        start: new Date(1995,6,1),
        end: new Date(2011,6,1),
        content: 'Russia constucts and brings Bushehr plant operational',
        type: 'range'
      },
      {
        id: 5,
        start: new Date(1996,8,5),
        end: new Date(2013,7,31),
        content: 'Iran and Libya Sanctions Act (ILSA) enforcement',
        type: 'range'
      },
      {
        id: 6,
        start: new Date(2003,6,1),
        content: 'US public statements about Iranian full fuel cycle intentions',
        type: 'point'
      },
      {
        id: 7,
        start: new Date(2013,7,31),
        end: new Date(),
        content: 'Sanctions toughened by international community',
        type: 'range'
      },
      {
        id: 8,
        start: new Date(2015,7,14),
        content: 'Iran nuclear deal signed',
        type: 'point'
      }
    ];

    var timelineItemsArr = [
      {
        id: 1,
        url: 'http://storymaps.esri.com/templates/swipe/',
        type: 'image'
      },
      {
        id: 2,
        url: 'http://storymaps.esri.com/templates/swipe/',
        type: 'app'
      },
      {
        id: 3,
        url: 'http://storymaps.esri.com/templates/swipe/',
        type: 'video'
      },
      {
        id: 4,
        url: 'http://storymaps.esri.com/templates/swipe/',
        type: 'app'
      },
      {
        id: 5,
        url: 'http://storymaps.esri.com/templates/swipe/',
        type: 'app'
      },
      {
        id: 6,
        url: 'https://www.youtube.com/embed/Vb1Mtx9BONA',
        type: 'video'
      }
    ];


    //http://storymaps.esri.com/templates/swipe/
    //http://esrifederal.maps.arcgis.com/apps/StorytellingTextLegend/index.html?appid=6b04bbf475bd4f3b8bbf4bd9527afc43

    timelineItemsStore = new Memory({ data: timelineItemsArr, idProperty: 'id' });

  }

  return model;
});