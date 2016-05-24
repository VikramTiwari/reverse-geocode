'use strict';

let assert = require('assert'),
  reverse = require('../lib/reverse-geocode');

describe('lookup()', function() {
  it('should give 94129 based on exact location', function() {
    let city = reverse.lookup(37.8072792, -122.4780652);
    assert.equal(94129, city.zipcode);
  });
});
