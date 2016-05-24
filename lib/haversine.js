'use strict';
// inspired from package haversine originally By Nick Justice (niix) at https://github.com/niix/haversine

function distance(start, end, options) {
  options = options || {}; // pass as empty and override with defaults later

  // init constants
  let km = 6371,
    mile = 3960;

  // convert everything to radians
  let R = options.unit === 'mile' ? mile : km,
    dLat = toRadian(end.latitude - start.latitude),
    dLon = toRadian(end.longitude - start.longitude),
    lat1 = toRadian(start.latitude),
    lat2 = toRadian(end.latitude);

  let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2),
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  if (options.threshold) {
    return options.threshold > (R * c);
  } else {
    return R * c;
  }
}

function toRadian(num) {
  return num * Math.PI / 180;
}

module.exports.distance = distance;
