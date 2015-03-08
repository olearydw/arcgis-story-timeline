// Utility for handling date ojects across the app
define([
	"dojo/ready",
	"dojo/dom",
	"dojo/on",
	"dojo/date"
], function (ready, dom, on, date) {
  var dates = {};

  ready(function () {
    //console.log('dates module is ready');
  });

  dates.getTodayValue = function () {
    console.log('get today fired');
    var d = new Date();
    console.log(d);
    return d;
  };

  dates.formatDateToUTC = function (dateObj) {
    return dateObj.toUTCString();
  };





  return dates;
});