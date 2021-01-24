import Prototype from './Prototype';

test('Prototype', () => {
  const pro = new Prototype('A');
  const a = pro.clone();
  const b = pro.clone();
  expect(a.name === b.name).toBe(true);
});
