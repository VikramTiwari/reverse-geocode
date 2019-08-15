const reverse = require('../lib/reverse-geocode')

// NOTE: datatypes are dependent on the files. Test just reflect what's in the file
describe('lookup()', () => {
  describe('USA', () => {
    const usa = reverse.lookup(37.8072792, -122.4780652, 'US')
    test('zipcode', () => {
      expect(usa.zipcode).toBe('94129')
    })
    test('state_abbr', () => {
      expect(usa.state_abbr).toBe('CA')
    })
    test('latitude', () => {
      expect(usa.latitude).toBe('37.799840')
    })
    test('longitude', () => {
      expect(usa.longitude).toBe('-122.46167')
    })
    test('city', () => {
      expect(usa.city).toBe('San Francisco')
    })
    test('state', () => {
      expect(usa.state).toBe('California')
    })
    test('distance', () => {
      expect(usa.distance).toBe(1.6610566475026183)
    })
  })

  describe('Canada', () => {
    const canada = reverse.lookup(50.2343, -110.3438, 'CA')

    test('postalCode', () => {
      expect(canada.zipcode).toBe('T1A')
    })
    test('state_abbr', () => {
      expect(canada.state_abbr).toBe('AB')
    })
    test('latitude', () => {
      expect(canada.latitude).toBe(50.0816)
    })
    test('longitude', () => {
      expect(canada.longitude).toBe(-110.5788)
    })
    test('city', () => {
      expect(canada.city).toBe('Medicine Hat')
    })
    test('province', () => {
      expect(canada.state).toBe('Alberta')
    })
    test('distance', () => {
      expect(canada.distance).toBe(23.844762255637427)
    })
  })

  describe('Australia', () => {
    const au = reverse.lookup(-34.988328, 138.515406, 'AU')

    test('zipcode', () => {
      expect(au.zipcode).toBe(5045)
    })
    test('state_abbr', () => {
      expect(au.state_abbr).toBe('SA')
    })
    test('latitude', () => {
      expect(au.latitude).toBe(-34.9833)
    })
    test('longitude', () => {
      expect(au.longitude).toBe(138.5167)
    })
    test('city', () => {
      expect(au.city).toBe('Glenelg Jetty Road')
    })
    test('state', () => {
      expect(au.state).toBe('South Australia')
    })
    test('distance', () => {
      expect(au.distance).toBe(0.5713811323631017)
    })
  })

  describe('Unhandled', () => {
    test("Doesn't Exist", () => {
      expect(reverse.lookup(56.029037, 92.880102, 'RU')).toBeUndefined()
    })
  })
})
