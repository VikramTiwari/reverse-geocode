import { getDistance } from './haversine'

interface City {
  country?: string
  zipcode?: number | string
  city?: string
  state?: string
  state_abbr?: string
  region?: string
  latitude: number
  longitude: number
  distance?: number
}

/**
 * Iterates over locations to find closest location to given input lat-long values
 * @param latitude latitude value
 * @param longitude longitude value
 * @param countryCode Country Code. Should exist in /locations/{countryCode}.json
 * @return {City} city data as an object
 */
export function lookup(
  latitude: number,
  longitude: number,
  countryCode: string,
) {
  let minDistance: number | boolean = Infinity
  let city: City = { latitude, longitude }

  // start with input values
  const start = { latitude, longitude }

  // iterate through all locations
  try {
    const otherCountryOrigin = require(`../locations/${countryCode.toUpperCase()}.json`)
    otherCountryOrigin.forEach((location: City) => {
      const distance = getDistance(start, location)
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
