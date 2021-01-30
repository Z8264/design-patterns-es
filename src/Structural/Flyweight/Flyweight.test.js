import Instance from './Flyweight';

test('Flyweight', () => {
  const instance = new Instance();
  instance.create(1);
  instance.create(2);

  expect(instance.items.length).toBe(2);
  expect(instance.items[0].value).toBe(1);
  expect(instance.items[1].value).toBe(2);
});
