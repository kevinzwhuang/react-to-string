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

test('Returns only the string children of an element with several children', () => {
  const testElement = (
    <p>
      Welcome to <a href="/about">reactToString</a>. <a href="/sign_up">Click here to sign up</a>
    </p>
  )
  expect(reactToString(testElement)).toBe('Welcome to reactToString. Click here to sign up');
});

test('Returns only the string children of an element with mixed children (React elements & strings)', () => {
  const testElement = (
    <div>
      <p>
        Welcome to <a href="/about">reactToString</a>. <a href="/sign_up">Click here to sign up</a>
      </p>
    </div>
  )
  expect(reactToString(testElement)).toBe('Welcome to reactToString. Click here to sign up');
});
