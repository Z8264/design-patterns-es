import Interator from './Interator';

test('Interator', () => {
  const i = new Interator([1, 2, 3]);
  expect(i.next()).toBe(2);
  expect(i.next()).toBe(3);
});
