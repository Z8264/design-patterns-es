import { State, Instance } from './State';

test('State', () => {
  const a = new State('A');
  const b = new State('B');

  const instance = new Instance();

  instance.change(a);
  expect(a.execute()).toBe('A');

  instance.change(b);
  expect(b.execute()).toBe('B');
});
