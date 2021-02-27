// inspired from package haversine originally By Nick Justice (niix) at https://github.com/niix/haversine
enum unit {
  mile = `mile`,
  km = `km`,
}

/**
 * converts a number to radian value
 * @param num number to be converted
 */
function toRadian(num: number) {
  return (num * Math.PI) / 180
}

/**
 * get distance between two lat-long values
 * @param start start lat-long object
 * @param end end lat-long object
 * @param options any options for distance calculation
 */
export function getDistance(
  start: { latitude: number; longitude: number },
  end: { latitude: number; longitude: number },
  options?: { threshold: number; unit: unit },
) {
  // init constants
  const km = 6371
  const mile = 3960

  // convert everything to radians
  const R = options && options.unit === 'mile' ? mile : km
  const dLat = toRadian(end.latitude - start.latitude)
  const dLon = toRadian(end.longitude - start.longitude)
  const lat1 = toRadian(start.latitude)
  const lat2 = toRadian(end.latitude)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  let distanceValue
  if (options && options.threshold) {
    distanceValue = options.threshold > R * c
  } else {
    distanceValue = R * c
  }

  return distanceValue
}
