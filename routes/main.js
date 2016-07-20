var express = require('express');
var router = express.Router();

// show the index page
router.get('/', function (req, res) {
  res.render('index', {title: 'Timestamp'});
});

// show the timestamp - input is unix time
router.get('/:time', function (req, res) {
  if (req.params.time>=0 && req.params.time<=2147483647) {
    var unixTime = req.params.time;
    res.render('time', {time1: unixTime, time2: unix2NaturalTime(unixTime)});
  } else {
    res.send("invalid time error...");
  }
});

// show the timestamp - input is unix time
router.get('/:month/:day/:year', function (req, res) {
  if (req.params.month>=1 && req.params.month<=12 &&
      req.params.day>=1 && req.params.day<=31 &&
      req.params.year>=1970) {
    var naturalTime = req.params.month + "/" + req.params.day + "/" + req.params.year
    res.render('time', {time1: naturalTime2Unix(naturalTime), time2: naturalTime});
  } else {
    res.send("invalid time error...");
  }
});

// http://www.epochconverter.com/programming/#javascript
function unix2NaturalTime(unixTime) {
    var t = new Date(unixTime*1000);
    return t.toLocaleDateString();
}

function naturalTime2Unix(naturalTime) {
  var t = new Date(naturalTime);
  return t.getTime()/1000.0;
}

module.exports = router;