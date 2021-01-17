import AbstractFactory from './AbstractFactory';

test('AbstractFactory', () => {
  const FactoryA = AbstractFactory.create('A');
  const FactoryB = AbstractFactory.create('B');

  const a1 = FactoryA.create('a1');
  const b1 = FactoryB.create('b1');

  expect(a1.name).toBe('A1');
  expect(b1.name).toBe('B1');
});
