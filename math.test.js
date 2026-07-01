// This is a simple test file to demonstrate MagnusCI.
// In the interview, to demonstrate a SUCCESSFUL build, leave this as is.
// To demonstrate the AUTO-REVERT feature, change the 2 to a 3 and push!

test('basic addition logic', () => {
  expect(1 + 1).toBe(2);
});

test('basic subtraction logic', () => {
  expect(5 - 2).toBe(3);
});

// Test commit for live demo!
