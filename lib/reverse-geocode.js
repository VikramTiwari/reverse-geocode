'use strict';

let haversine = require('./haversine');

// get dataset for lookup
let usaLocations = require('../locations/US.json');

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
  usaLocations.forEach(function(location) {
    let distance = haversine.distance(start, location);
    if (distance < minDistance) {
      city = location;
      minDistance = distance;
    }
  });
  // add distance to city object
  city.distance = minDistance;
  // return city object
  return city;
}

module.exports.lookup = lookup;
