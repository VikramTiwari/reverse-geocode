'use strict';

let fs = require('fs'),
  _ = require('lodash'),
  haversine = require('./haversine');

let locations = require('../locations/US.json');

function lookup(latitude, longitude) {
  let minDistance = Infinity,
    city = {};

  let start = {
    latitude: latitude,
    longitude: longitude
  };

  _.forEach(locations, function(location) {
    let distance = haversine.distance(start, location);
    if (distance < minDistance) {
      city = location;
      minDistance = distance;
    }
  });

  return city;
}

module.exports.lookup = lookup;
