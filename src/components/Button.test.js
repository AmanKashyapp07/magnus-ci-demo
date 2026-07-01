const { getButtonStyles, isButtonDisabled } = require('./Button');

describe('Frontend Button Component', () => {
  test('primary variant returns correct tailwind classes', () => {
    const styles = getButtonStyles('primary');
    expect(styles).toContain('bg-blue-600');
    expect(styles).toContain('text-white');
  });

  test('danger variant returns correct tailwind classes', () => {
    const styles = getButtonStyles('danger');
    expect(styles).toContain('bg-red-500');
  });

  test('button disables correctly during loading states', () => {
    expect(isButtonDisabled(true, false)).toBe(true);
    expect(isButtonDisabled(false, true)).toBe(true);
    expect(isButtonDisabled(false, false)).toBe(false);
  });
});
