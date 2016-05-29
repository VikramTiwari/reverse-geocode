var reverse = require('./lib/reverse-geocode.js');

let gps = reverse.gps(37.8072792, -122.4780652),
  zip = reverse.zip('94129'),
  city = reverse.city('san Francisco', 'ca'),
  state = reverse.state('ca'),
  statezips = reverse.zips('ca'),
  cityzips = reverse.zips('san Francisco'),
  cities = reverse.cities('ca');

console.log(zip);
