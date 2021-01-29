import Command from './Interpreter';

test('Interpreter', () => {
  const command = new Command(1);
  expect(command.execute()).toBe(2);
});
