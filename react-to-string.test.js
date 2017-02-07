import React from 'react';
import reactToString from './react-to-string';

test('Returns the original string if the element is a string', () => {
  const testString = 'This is a string';
  expect(reactToString(testString)).toBe(testString);
});

test('Returns the string child of an element that only has one child', () => {
  const testElement = <div>This is a test string</div>
  expect(reactToString(testElement)).toBe('This is a test string');
});
