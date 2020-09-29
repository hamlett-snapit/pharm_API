const express = require('express');
const app = express();
const path = require('path');
const {
  request
} = require('https');
const {
  fileURLToPath
} = require('url');
const router = express.Router();
var http = require("https");
const csv = require('csvtojson');
const allLocations = [];
app.use(express.static('public'));
var userGeoLocation;
app.use(express.urlencoded({
  extended: true
}));
app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile)



var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {

  res.render('landing.ejs');
});

app.get('/viewRaw', function (req, res) {

  res.render('vraw.ejs', {
    closestLocation: allLocations[0]
  });
});

app.get('/closestPharmacy', (req, res) => {
  var options = {
    "method": "GET",
    "hostname": "freegeoip.app",
    "port": null,
    "path": "/json/",
    "headers": {
      "accept": "application/json",
      "content-type": "application/json"
    }
  };
  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      userGeoLocation = JSON.parse(body.toString());
      grabLocation(userGeoLocation);

    });

  });
  req.end();

  function grabLocation(location) {
    const converter = csv()
      .fromFile('./public/pharmacies.csv').then((json) => {
        json.forEach(rxlocation => {
          rxlocation.distance = distance(location.latitude, location.longitude, rxlocation.latitude, rxlocation.longitude);
          rxlocation.distance = rxlocation.distance.toString().substr(0, 4);
          allLocations.push(rxlocation);
          allLocations.sort(function (a, b) {
            return a.distance - b.distance;
          });
        });
        //  console.log(allLocations.sort(function (a, b) {
        //     return a.distance - b.distance;
        //   }))
        console.log(allLocations[0]);
      });

    function distance(lat1, lon1, lat2, lon2, unit) {
      var radlat1 = Math.PI * lat1 / 180
      var radlat2 = Math.PI * lat2 / 180
      var theta = lon1 - lon2
      var radtheta = Math.PI * theta / 180
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist)
      dist = dist * 180 / Math.PI
      dist = dist * 60 * 1.1515
      if (unit == "K") {
        dist = dist * 1.609344
      }
      if (unit == "N") {
        dist = dist * 0.8684
      }
      return dist
    }
  }
  res.render('index.ejs', {
    closestLocation: allLocations[0]
  });
});
app.listen(3000);