import { Mediator, Instance } from './Mediator';

test('Strategy', () => {
  const a = new Instance(1);
  const b = new Instance(2);

  Mediator.execute(a, b);
  expect(a.value).toBe(2);
});
