'use strict';
let COUNTRIES = { CANADA: 'CA', USA: 'US' };

let haversine = require('./haversine');

/**
 * iterates over locations to find closest location to given input lat-lon values
 * @param  {Number} latitude  latitude value
 * @param  {Number} longitude longitude value
 * @param  {String} countryCode Country Code ['CA', 'US']. See COUNTRIES.
 * @return {Object}           city data in an object
 */
function lookup(latitude, longitude, countryCode) {
  if (typeof countryCode === 'undefined') {
    // oh, you mean US!
    countryCode = COUNTRIES.USA;
  }

  let minDistance = Infinity,
    city = {};

  // start with inout values
  let start = {
    latitude: latitude,
    longitude: longitude
  };

  // iterate through all locations
  let lookupFunc = function(location) {
    let distance = haversine.distance(start, location);
    if (distance < minDistance) {
      city = location;
      minDistance = distance;
    }
  };

  switch (countryCode) {
    case COUNTRIES.USA:
      let usaLocations = require('../locations/US.json');
      usaLocations.forEach(function(location){
        lookupFunc(location);
      });
      break;
    case COUNTRIES.CANADA:
      let caLocations = require('../locations/CA.json');
      caLocations.forEach(function(location) {
        lookupFunc(location);
      });
      break;
    default:
      return undefined;
  }

  // add distance to city object
  city.distance = minDistance;
  // return city object
  return city;
}

module.exports.lookup = lookup;
module.exports.COUNTRIES = COUNTRIES;
