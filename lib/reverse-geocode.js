'use strict';

let _ = require('lodash'),
  haversine = require('./haversine');

// get dataset for lookup
let locations = require('../locations/US.json');

/**
 * iterates over locations to find closest location to given input lat-lon values
 * @param  {Number} latitude  latitude value
 * @param  {Number} longitude longitude value
 * @return {Object}           city data in an object
 */
function lookup(latitude, longitude) {
  let minDistance = Infinity,
    city = {};

  // start with inout values
  let start = {
    latitude: latitude,
    longitude: longitude
  };

  // iterate through all locations
  _.forEach(locations, function(location) {
    let distance = haversine.distance(start, location);
    if (distance < minDistance) {
      city = location;
      minDistance = distance;
    }
  });
  // return city object
  return city;
}

module.exports.lookup = lookup;
