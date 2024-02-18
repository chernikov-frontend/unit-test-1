import showHealth from '../showHealth';

test.each([
  ['Mar', 100, 'healthy'],
  ['Mar', 51, 'healthy'],
  ['Mar', 50, 'wounded'],
  ['Mar', 21, 'wounded'],
  ['Mar', 15, 'wounded'],
  ['Mar', 14, 'critical'],
])('health status bar should return right values', (name, health, expected) => {
  const result = showHealth({name, health});
  expect(result).toBe(expected);
});
