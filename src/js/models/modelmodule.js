define([
  "dojo/ready",
  "dojo/store/Memory"
], function (ready, Memory) {

  var model = {};
  var credentialObj = {};
  var myPortal = {};
  var timelineArr;
  var timelineGroupsArr;
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

  model.getTimelineGroupsDataSet = function() {
    return timelineGroupsArr;
  };

  model.getTimelineItemInfos = function(val) {
    var itemInfo;
    var i = timelineItemsStore.query({ id: val });
    itemInfo = i.total > 0 ? i[0] : false;
    return itemInfo;
  };

  function initModelItems(){
    timelineGroupsArr = [
      {id: 1, content: 'Iran +'},
      {id: 2, content: 'US +'}
      //{id: 3, content: 'Iran'},
      //{id: 4, content: 'US'}
    ];

    //'box' (default), 'point', 'range', 'rangeoverflow'
    timelineArr = [
      {
        id: 1,
        start: new Date(1990,6,1),
        content: 'Iran and China sign 10 year nuclear agreement', type:'point',
        group: 1
      },
      {
        id: 2,
        start: new Date(1992,6,1),
        end: new Date(1998,6,1),
        content: 'US states nuclear activity is civil only',
        group: 2
      },
      {
        id: 3,
        start: new Date(1994,6,1),
        content: 'China installs first Iranian research reactor',
        type:'point',
        group: 1
      },
      {
        id: 4,
        start: new Date(1995,6,1),
        end: new Date(2011,6,1),
        content: 'Russia builds+fuels Bushehr',
        type: 'range',
        group: 1
      },
      {
        id: 5,
        start: new Date(1996,8,5),
        end: new Date(2013,7,31),
        content: 'Iran Sanctions Act (ISA)',
        type: 'range',
        group: 2
      },
      {
        id: 6,
        start: new Date(2003,6,1),
        content: 'US issues strong statements condemning Iranian nuclear intentions',
        type: 'point',
        group: 2
      },
      {
        id: 7,
        start: new Date(2013,7,31),
        end: new Date(),
        content: 'Iran Freedom Support Act',
        type: 'range',
        group: 2
      },
      {
        id: 8,
        start: new Date(2015,7,14),
        content: 'Iran nuclear agreement',
        type: 'point',
        group: 2
      },
      {
        id: 9,
        start: new Date(2015,8,1),
        end: new Date(2025,8,1),
        content: 'Russia agrees to build 8 new Iranian reactors',
        type: 'range',
        group: 1
      }
    ];

    var timelineItemsArr = [
      {
        id: 1,
        url: 'assets/img/iran/iran_first_reactor.jpg',
        type: 'image'
      },
      {
        id: 2,
        url: 'assets/img/iran/commercial_plant.jpg',
        type: 'image'
      },
      {
        id: 3,
        url: 'assets/img/iran/iran_first_reactor.jpg',
        type: 'image'
      },
      {
        id: 4,
        url: 'assets/img/bushehr3.png',
        type: 'image'
      },
      {
        id: 5,
        url: '',
        type: undefined
      },
      {
        id: 6,
        url: 'http://www.arcgis.com/apps/MapTour/?appid=77fee1aea38148a592d1271353b46a98&webmap=d33f40074ace4316bef8e35a777353f1',
        type: 'app'
      },
      {
        id: 7,
        url: 'https://www.youtube.com/embed/Vb1Mtx9BONA',
        type: 'video'
      },
      {
        id: 8,
        url: 'assets/img/iran-talks-three.jpg',
        type: 'image'
      },
      {
        id: 9,
        url: 'https://screen.yahoo.com/russia-may-build-eight-nuclear-105030212.html?format=embed',
        type: 'video'
      }
    ];


    //http://storymaps.esri.com/templates/swipe/
    //http://esrifederal.maps.arcgis.com/apps/StorytellingTextLegend/index.html?appid=6b04bbf475bd4f3b8bbf4bd9527afc43

    timelineItemsStore = new Memory({ data: timelineItemsArr, idProperty: 'id' });

  }

  return model;
});