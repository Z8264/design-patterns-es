import { Visitor, Instance } from './Visitor';

test('Visitor', () => {
  const a = new Visitor(1);
  const b = new Visitor(2);

  const instance = new Instance(2);

  expect(instance.execute(a)).toBe(2);
  expect(instance.execute(b)).toBe(4);
});
