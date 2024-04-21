import Valid from "../classes/valid";

test("Validator checking for incorrect card number entry", () => {
  const valid = new Valid();
  const result = valid.valid("2chdsvhuis88");

  expect(result).toBe(false);
});

test("Validator checking for incorrect card number entry", () => {
  const valid = new Valid();
  const result = valid.valid("6011687833633694040404333333");

  expect(result).toBe(false);
});

test("validator check for card number", () => {
  const valid = new Valid();
  const result = valid.valid("6011687833633694");

  expect(result).toBe(true);
});
