# reverse-geocode

get reverse-geocoded data for latitude and longitude values

[![Build Status](https://travis-ci.org/VikramTiwari/reverse-geocode.svg?branch=master)](https://travis-ci.org/VikramTiwari/reverse-geocode) [![NPM Version](https://img.shields.io/npm/v/reverse-geocode.svg)](https://www.npmjs.com/package/reverse-geocode) [![NPM Download](https://img.shields.io/npm/dm/reverse-geocode.svg)](https://www.npmjs.com/package/reverse-geocode)

## Features

- Zero dependencies
- Quick city level lookups
- Only US, Canada and Australia dataset as of now, more coming soon.

## How to use

- Include package in your project

```bash
npm install --save reverse-geocode
or
yarn add reverse-geocode
```

- Use package to get geo data from lat-long values. Specify a country code, which should match `/locations/{countryCode}.json`. USA, Australia, and Canada are provided.

```javascript
const reverse = require('reverse-geocode')
console.log(reverse.lookup(37.8072792, -122.4780652, 'us'))

/*
{ zipcode: '94129',
  state_abbr: 'CA',
  latitude: '37.799840',
  longitude: '-122.46167',
  city: 'San Francisco',
  state: 'California',
  distance: 1.6610566475026183 }
 */
```

```javascript
const reverse = require('reverse-geocode')
console.log(reverse.lookup(50.447444, -104.418513, 'ca'))
/*
{ country: 'CA',
  zipcode: 'S4Z',
  region: 'Regina Northeast',
  state: 'Saskatchewan',
  state_abbr: 'SK',
  city: 'Regina',
  latitude: 50.4497,
  longitude: -104.5323,
  distance: 8.06066680024397 }
*/
```

### Data Format

The contents of a location data file is a simple JSON array, of location data:

```javascript
;[
  {
    zipcode: '59221',
    state_abbr: 'MT',
    latitude: '47.900376',
    longitude: '-104.13403',
    city: 'Fairview',
    state: 'Montana'
  }
]
```

Find country postalcode data from a provider of your choice, format as above, and save into `/locations/` as `{countryCode}.JSON`. Then, specify the same country code.

For a good time, save all data to `all.json` and specify `'all'` to the `reverse.lookup` method.

### Credits

- Haversine originally by Nick Justice (niix) at <https://github.com/niix/haversine>
- Inspired from cities by Steven Lu (sjlu) at <https://www.npmjs.com/package/cities>
