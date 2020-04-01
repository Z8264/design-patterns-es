const Singleton = require('../Singleton.proxy');

test('Singleton', () => {
  const a = new Singleton('1');
  const b = new Singleton('2');
  expect(a.name).toBe('1');
  expect(a.name).toBe('1');
  expect(a === b).toBe(true);
});
