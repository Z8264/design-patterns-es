import Builder from './Builder';

test('Builder', () => {
  const bu = new Builder();
  expect(bu.a.name).toBe('A');
  expect(bu.b.name).toBe('B');
});
