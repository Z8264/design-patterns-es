import Strategy from './Strategy';

test('Strategy', () => {
  const s = new Strategy(3, 4);
  expect(s.calculate('addition')).toBe(7);
  expect(s.calculate('max')).toBe(4);
});
