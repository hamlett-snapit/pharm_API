function ramone() {

    const status = document.getElementById('status');
    // const mapLink = document.querySelector('#map-link');
  
    // mapLink.href = '';
    // mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      document.getElementById('input1').value = latitude;
      document.getElementById('input2').value = longitude;
      status.value = 'hello';
      // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
ramone();

// var express = require('express')
// var app = express();
// var csvCon = require('./node_modules/jquery-csv/src/jquery.csv.js');
// const path = require('path');
// const { request } = require('https');
// const { fileURLToPath } = require('url');
// const router = express.Router();
// const csv = require('csvtojson');
// var allLocations = [];
// const userLongitude = -97.8220;
// const userLatitude = 37.7510;

// app.use(express.urlencoded({
//   extended: true
// }));

// app.get('/', function (req, res) {
//   res.send('Thank You RX Family')
// });

// app.get('/:long/:latt', function (req, res) {
// var nnm = long;
// con

// const converter = csv()
// .fromFile('./public/pharmacies.csv')
// .then((json)=>{
//     json.forEach(rxlocation => {
//       rxlocation.distance = distance(userLatitude, userLongitude, rxlocation.latitude, rxlocation.longitude);
//       allLocations.push(rxlocation);
//       allLocations.sort(function (a,b){
//         return a.distance - b.distance;
//       });
      
//       if(rxlocation != null ){
        
//         // console.log(
//         //   rxlocation.name,
//         //   rxlocation.distance);
//       } 
//       //console.log(rxlocation);
      
//       console.log(allLocations[0]);
//     });
// });
// function distance(lat1, lon1, lat2, lon2, unit) {
//   var radlat1 = Math.PI * lat1/180
//   var radlat2 = Math.PI * lat2/180
//   var theta = lon1-lon2
//   var radtheta = Math.PI * theta/180
//   var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//   if (dist > 1) {
//     dist = 1;
//   }
//   dist = Math.acos(dist)
//   dist = dist * 180/Math.PI
//   dist = dist * 60 * 1.1515
//   if (unit=="K") { dist = dist * 1.609344 }
//   if (unit=="N") { dist = dist * 0.8684 }
//   return dist
// }


// });


// // Invoking csv returns a promise
// const converter = csv()
// .fromFile('./public/pharmacies.csv')
// .then((json)=>{
//     json.forEach(rxlocation => {
//       rxlocation.distance = distance(userLatitude, userLongitude, rxlocation.latitude, rxlocation.longitude);
//       allLocations.push(rxlocation);
//       allLocations.sort(function (a,b){
//         return a.distance - b.distance;
//       });
      
//       if(rxlocation != null ){
        
//         // console.log(
//         //   rxlocation.name,
//         //   rxlocation.distance);
//       } 
//       //console.log(rxlocation);
      
//       console.log(allLocations[0]);
//     });
// });
// function distance(lat1, lon1, lat2, lon2, unit) {
//   var radlat1 = Math.PI * lat1/180
//   var radlat2 = Math.PI * lat2/180
//   var theta = lon1-lon2
//   var radtheta = Math.PI * theta/180
//   var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//   if (dist > 1) {
//     dist = 1;
//   }
//   dist = Math.acos(dist)
//   dist = dist * 180/Math.PI
//   dist = dist * 60 * 1.1515
//   if (unit=="K") { dist = dist * 1.609344 }
//   if (unit=="N") { dist = dist * 0.8684 }
//   return dist
// }

