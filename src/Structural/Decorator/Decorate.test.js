import Decorator from './Decorator';

test('Decorator', () => {
  const decorator = new Decorator(3);
  expect(decorator.execute()).toBe(3);
  expect(decorator.superExecute()).toBe(6);
});
