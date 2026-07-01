test('string concatenation works', () => {
  expect('Magnus' + ' ' + 'CI').toBe('Magnus CI');
});

test('string length is correct', () => {
  expect('DevOps'.length).toBe(6);
});

test('string includes substring', () => {
  expect('Continuous Integration').toContain('Integration');
});
