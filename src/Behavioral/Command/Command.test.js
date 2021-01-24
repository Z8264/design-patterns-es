import {
  Commander,
  Executor,
  Command,
} from './Command';

test('Command', () => {
  const executor = new Executor();
  const command = new Command(executor);
  const commander = new Commander(command);

  commander.execute();
  expect(executor.state).toBe(true);
});
