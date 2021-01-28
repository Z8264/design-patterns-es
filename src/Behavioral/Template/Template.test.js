import Instance from './Template';

test('Template', () => {
  const instance = new Instance(1, 2);
  expect(instance.execute()).toBe(3);
});
