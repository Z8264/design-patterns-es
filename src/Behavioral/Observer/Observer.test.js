import { Observer, Instance } from './Observer';

test('Strategy', () => {
  const a = new Observer(1);
  const b = new Observer(2);

  const instance = new Instance();
  instance.add(a);
  instance.add(b);

  instance.execute(2);
  expect(a.value).toBe(2);
  expect(b.value).toBe(4);
});
