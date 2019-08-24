const haversine = require('./haversine')

/**
 * iterates over locations to find closest location to given input lat-long values
 * @param  {Number} latitude  latitude value
 * @param  {Number} longitude longitude value
 * @param  {String} countryCode Country Code. Should exist in /locations/{countryCode}.json
 * @return {Object}           city data in an object
 */
function lookup (latitude, longitude, countryCode) {
  let minDistance = Infinity
  let city = {}

  // start with inout values
  const start = { latitude, longitude }

  // iterate through all locations
  try {
    const otherCountryOrigin = require(`../locations/${countryCode.toUpperCase()}.json`)
    otherCountryOrigin.forEach(location => {
      const distance = haversine.distance(start, location)
      if (distance < minDistance) {
        city = location
        minDistance = distance
      }
    })
  } catch (e) {
    return undefined
  }

  // add distance to city object
  city.distance = minDistance

  // return city object
  return city
}

module.exports.lookup = lookup
