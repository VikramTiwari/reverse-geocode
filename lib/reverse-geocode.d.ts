// Type definitions for reverse-geocode
// Definitions by: Peter Kazazes <https://peterk.co>

export function lookup(
  latitude: number,
  longitude: number,
  countryCode: string
): ReverseGeocode;

// ran ../locations/*.json through https://app.quicktype.io/
declare interface ReverseGeocode {
  country?: string;
  zipcode: number | string;
  city?: string;
  state: string;
  state_abbr: string;
  region?: string;
  latitude: number;
  longitude: number;
}
