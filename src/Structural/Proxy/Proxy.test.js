import Proxy from './Proxy';

test('Proxy', () => {
  const instance = new Proxy();
  expect(instance.value).toBe(true);
});
