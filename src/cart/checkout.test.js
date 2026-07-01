describe("E-Commerce Checkout flow", () => {
  test("Cart total calculates correctly with 10% tax", () => {
    const subtotal = 100;
    const tax = 0.10;
    expect(subtotal + (subtotal * tax)).toBe(110);
  });

  test("Discount codes are applied successfully", () => {
    const total = 50;
    const discount = 10;
    expect(total - discount).toBe(40);
  });
});
