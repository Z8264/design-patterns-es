import Facade from './Facade';

test('Facade', () => {
  const f = new Facade();
  expect(f.executeA()).toBe('A');
  expect(f.executeB()).toBe('B');
  expect(f.executeC()).toBe('C');
});
