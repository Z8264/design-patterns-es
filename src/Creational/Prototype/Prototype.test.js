import Prototype from './Prototype';

test('Prototype', () => {
  const a = new Prototype('A');
  const b = a.clone();
  expect(a.name === b.name).toBe(true);
});
