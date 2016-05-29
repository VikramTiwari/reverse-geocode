# reverse-geocode

get reverse-geocoded data for latitude and longitude values

[![Build Status](https://travis-ci.org/VikramTiwari/reverse-geocode.svg?branch=master)](https://travis-ci.org/VikramTiwari/reverse-geocode) [![NPM Version](https://img.shields.io/npm/v/reverse-geocode.svg)](https://www.npmjs.com/package/reverse-geocode) [![NPM Download](https://img.shields.io/npm/dm/reverse-geocode.svg)](https://www.npmjs.com/package/reverse-geocode)

## Features

- Minimal dependencies
- Quick lookups
- Multiple API methods
- US dataset as of now, more coming soon

## How to use

- Include package in your project

```bash
npm install --save reverse-geocode
```

- Use package to get geo data

```javascript
let reverse = require('reverse-geocode');
console.log(reverse.geo(37.8072792, -122.4780652));

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

### API Methods

- [gps]()
- [zip]()
- [city]()
- [state]()
- [zips]()
- [cities]()

#### Credits

- Haversine originally by Nick Justice (niix) at <https://github.com/niix/haversine>
- Inspired from cities by Steven Lu (sjlu) at <https://www.npmjs.com/package/cities>
