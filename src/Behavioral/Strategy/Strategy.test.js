import Strategy from './Strategy';

test('Strategy', () => {
  const s = new Strategy(3, 4);
  expect(s.execute('addition')).toBe(7);
  expect(s.execute('max')).toBe(4);
});
