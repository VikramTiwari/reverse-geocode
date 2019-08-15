// inspired from package haversine originally By Nick Justice (niix) at https://github.com/niix/haversine

/**
 * converts a number to radian value
 * @param {number} num a number
 */
function toRadian (num) {
  return (num * Math.PI) / 180
}

/**
 * finds the distance between two lat-long values
 * @param {object} start start lat-long
 * @param {object} end end lat-long
 * @param {object} options any options
 */
function distance (start, end, options = {}) {
  // init constants
  const km = 6371
  const mile = 3960

  // convert everything to radians
  const R = options.unit === 'mile' ? mile : km
  const dLat = toRadian(end.latitude - start.latitude)
  const dLon = toRadian(end.longitude - start.longitude)
  const lat1 = toRadian(start.latitude)
  const lat2 = toRadian(end.latitude)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  let distanceValue = 0

  if (options.threshold) {
    distanceValue = options.threshold > R * c
  } else {
    distanceValue = R * c
  }

  return distanceValue
}

module.exports.distance = distance
