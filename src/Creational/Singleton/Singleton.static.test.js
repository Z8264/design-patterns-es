import Singleton from './Singleton.static';

test('Singleton', () => {
  const a = Singleton.create('1');
  const b = Singleton.create('2');
  expect(a.name).toBe('1');
  expect(a.name).toBe('1');
  expect(a === b).toBe(true);
});
