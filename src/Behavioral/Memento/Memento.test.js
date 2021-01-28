import { Memento, Instance } from './Memento';

test('Memento', () => {
  const memento = new Memento();
  const instance = new Instance();

  instance.value = 1;
  instance.save(memento);
  instance.value = 2;
  expect(instance.value).toBe(2);

  instance.restore(memento);
  expect(instance.value).toBe(1);
});
