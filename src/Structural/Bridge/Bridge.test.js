import { Bridge, Instance } from './Bridge';

test('Bridge', () => {
  const bridge = new Bridge();
  const instance = new Instance(1, bridge);

  expect(instance.execute()).toBe(1);
});
