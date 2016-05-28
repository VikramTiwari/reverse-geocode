'use strict';

let assert = require('assert'),
  reverse = require('../lib/reverse-geocode');

let gps = reverse.gps(37.8072792, -122.4780652),
  zip = reverse.zip('94129'),
  city = reverse.city('san Francisco', 'ca'),
  state = reverse.state('ca'),
  statezips = reverse.zips('ca'),
  cityzips = reverse.zips('san Francisco'),
  cities = reverse.cities('ca');
  
describe('gps()', function() {
  it('zipcode', function() {
    assert.equal(94129, gps.zipcode);
  });
  it('state_abbr', function() {
    assert.equal('CA', gps.state_abbr);
  });
  it('latitude', function() {
    assert.equal('37.799840', gps.latitude);
  });
  it('longitude', function() {
    assert.equal('-122.46167', gps.longitude);
  });
  it('city', function() {
    assert.equal('San Francisco', gps.city);
  });
  it('state', function() {
    assert.equal('California', gps.state);
  });
  it('distance', function() {
    assert.equal(1.6610566475026183, gps.distance);
  });
});

describe('zip()', function() {
  it('zipcode', function() {
    assert.equal(94129, zip.zipcode);
  });
  it('state_abbr', function() {
    assert.equal('CA', zip.state_abbr);
  });
  it('latitude', function() {
    assert.equal('37.799840', zip.latitude);
  });
  it('longitude', function() {
    assert.equal('-122.46167', zip.longitude);
  });
  it('city', function() {
    assert.equal('San Francisco', zip.city);
  });
  it('state', function() {
    assert.equal('California', zip.state);
  });
});

describe('city()', function() {
  it('state_abbr', function() {
    assert.equal('CA', city.state_abbr);
  });
  it('city', function() {
    assert.equal('San Francisco', city.city);
  });
  it('state', function() {
    assert.equal('California', city.state);
  });
});

describe('state()', function() {
  it('state', function() {
    assert.equal('California', state.state);
  });
});

describe('zips()', function() {
  it('state', function() {
    assert.equal(1757, statezips.length);
  });
  it('city', function() {
    assert.equal(27, cityzips.length);
  });
});

describe('cities()', function() {
  it('count', function() {
    assert.equal(1151, cities.length);
  });
});
