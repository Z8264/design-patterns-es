import { Instance, Adapter } from './Adapter';

test('Adapter', () => {
  const instance = new Instance();
  Adapter.adapter(instance);
  expect(instance.execute()).toBe(true);
});
