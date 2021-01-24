import Facade from './Facade';

test('Facade', () => {
  const f = new Facade();
  expect(f.a.getName()).toBe('A');
  expect(f.b.getName()).toBe('B');
  expect(f.c.getName()).toBe('C');
});
