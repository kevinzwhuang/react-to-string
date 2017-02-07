import reactToString from './react-to-string';

test('Returns the original string if the element is a string', () => {
  const testString = 'This is a string';
  expect(reactToString(testString)).toBe(testString);
});
