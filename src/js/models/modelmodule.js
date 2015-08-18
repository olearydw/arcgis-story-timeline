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
        content: 'Iran and China sign 10 year nuclear cooperation agreement',
        type:'point',
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
        content: 'Russia builds and fuels Bushehr nuclear plant',
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
        //end: new Date(2025,8,1),
        content: 'Iran Freedom Support Act (Sanctions)',
        type: 'point',
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
        start: new Date(2015,5,22),
        end: new Date(2025,8,1),
        content: 'Russia agrees to build 8 new Iranian reactors',
        type: 'range',
        group: 1
      }
    ];

    var timelineItemsArr = [
      {
        id: 1,
        embed: '',
        type: undefined
      },
      {
        id: 2,
        embed: '<div class="hero-unit" style="background-image: url(assets/img/iran/commercial_plant.jpg)"></div>',
        type: 'image'
      },
      {
        id: 3,
        embed: '<style>.embed-container {position: relative; padding-bottom: 450px; margin-bottom: 15px; height: 0; max-width: 100%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Nuclear Technology Center of Isfahan" src="http://wdcintel.maps.arcgis.com/apps/Embed/index.html?webmap=bf372728ee4c4c71ba11dba2819e7ea1&amp;extent=51.0223,32.3775,52.4588,33.0109&amp;zoom=true&amp;scale=true&amp;disable_scroll=false&amp;theme=light"></iframe></div>',
        type: 'map'
      },
      {
        id: 4,
        embed: '<div class="hero-unit" style="background-image: url(assets/img/iran/bushehr_lg.jpg)"></div>',
        type: 'image' //need a report looking graphic
      },
      {
        id: 5,
        embed: '<style>.embed-container {position: relative; padding-bottom: 450px; margin-bottom: 15px; height: 0; max-width: 100%;} .embed-container iframe, .embed-container object, .embed-container iframe{position: absolute; top: 0; left: 0; width: 100%; height: 100%;} small{position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}</style><div class="embed-container"><iframe width="500" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="Countries with sanctions against Iran" src="http://wdcintel.maps.arcgis.com/apps/Embed/index.html?webmap=f9614f42b89e450cb1807c91f672aeee&amp;extent=-180,-39.9142,180,81.5174&amp;zoom=true&amp;scale=true&amp;disable_scroll=false&amp;theme=light"></iframe></div>',
        type: 'map'
      },
      {
        id: 6,
        embed: '<iframe width="100%" height="450px" src="http://www.arcgis.com/apps/MapTour/?appid=77fee1aea38148a592d1271353b46a98&webmap=d33f40074ace4316bef8e35a777353f1" frameborder="0"></iframe>',
        type: 'app'
      },
      {
        id: 7,
        embed: '',
        type: undefined  //try to get webmap embed
      },
      {
        id: 8,
        embed: '<div class="hero-unit" style="background-image: url(assets/img/iran/iran-talks-three.jpg)"></div>',
        type: 'image'
      },
      {
        id: 9,
        embed: '<iframe width="100%" height="450px" src="https://screen.yahoo.com/russia-may-build-eight-nuclear-105030212.html?format=embed" frameborder="0"></iframe>',
        type: 'video'
      }
    ];


    //http://storymaps.esri.com/templates/swipe/
    //http://esrifederal.maps.arcgis.com/apps/StorytellingTextLegend/index.html?appid=6b04bbf475bd4f3b8bbf4bd9527afc43

    timelineItemsStore = new Memory({ data: timelineItemsArr, idProperty: 'id' });

  }

  return model;
});