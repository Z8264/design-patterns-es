import Factory from './Factory';

test('Factory', () => {
  const a = Factory.create('A');
  const b = Factory.create('b');
  const c = Factory.create('C');
  expect(a.name).toBe('A');
  expect(b.name).toBe('B');
  expect(c.name).toBe('C');
});
