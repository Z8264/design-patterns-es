import Instance from './Composite';

test('Composite', () => {
  const a = new Instance(1);
  const b = new Instance(2);
  const c = new Instance(3);
  const d = new Instance(4);

  a.add(b);
  a.add(c);
  b.add(d);

  expect(a.toString()).toBe('1243');
});
