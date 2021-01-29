import Instance from './ChainOfResponsibility';

test('ChainOfResponsibility', () => {
  const instance = new Instance();
  instance.execute(1);
  expect(instance.value).toBe(6);
  instance.execute(2);
  expect(instance.value).toBe(18);
});
