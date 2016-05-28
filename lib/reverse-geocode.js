'use strict';

let _ = require('lodash'),
  haversine = require('./haversine');

// get dataset for lookup
let locations = require('../locations/US.json');

/**
 * iterates over locations to find closest location to given input lat-lon values
 * @param  {Number} latitude  latitude value
 * @param  {Number} longitude longitude value
 * @return {Object}           city data object
 */
function gps(latitude, longitude) {
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
  // add distance to city object
  city.distance = minDistance;
  // return city object
  return city;
}

/**
 * lookup a location using zipcode
 * @param  {Number} zipcode zipcode value for a location
 * @return {Object}         city data object
 */
function zip(zipcode) {
  return _.find(locations, ['zipcode', _.padStart(zipcode, 5, 0)]);
}

/**
 * lookup a city
 * @param  {String} city       city name
 * @param  {String} state_abbr state abbriviation
 * @return {Object}            city data object
 */
function city(city, state_abbr) {
  return _.find(_.filter(locations, ['state_abbr', _.toUpper(state_abbr)]), ['city', _.startCase(city)]); // REVIEW: Should it be just first zip value for that city or some other value?
}

/**
 * lookup a state
 * @param  {String} state_abbr state abbriviation
 * @return {Object}            city data object
 */
function state(state_abbr) {
  return _.find(locations, ['state_abbr', _.toUpper(state_abbr)]); // REVIEW: Should this be a city object, when all it is, is first zip value for that state
}

/**
 * get all zips for a location
 * @param  {String} location state abbriviation or city name
 * @return {Array}          all zips in location
 */
function zips(location) {
  let l = _.values(_.mapValues(_.filter(locations, ['state_abbr', _.toUpper(location)]), 'zipcode'));
  return l.length === 0 ? _.values(_.mapValues(_.filter(locations, ['city', _.startCase(location)]), 'zipcode')) : l;
}

/**
 * get all cities for a state
 * @param  {String} state_abbr state abbriviation
 * @return {Array}            all cities in a state
 */
function cities(state_abbr) {
  return _.uniq(_.values(_.mapValues(_.filter(locations, ['state_abbr', _.toUpper(state_abbr)]), 'city')));
}

// newer 1.1.x api
module.exports.gps = gps;
module.exports.zip = zip;
module.exports.city = city;
module.exports.state = state;
module.exports.zips = zips;
module.exports.cities = cities;

// for support of 1.0.x api
module.exports.lookup = gps;
