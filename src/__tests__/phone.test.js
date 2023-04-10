import phoneToString from '../js/phone';

test('test Russian phone number start 7', () => {
  expect(phoneToString('-7(925)-433-43-32')).toBe('+79254334332');
});
test('test Russian phone number start 8', () => {
  expect(phoneToString('8(925)-433-43-32')).toBe('+79254334332');
});
test('test another country phone number start 325', () => {
  expect(phoneToString('+325(925)-433-43-32')).toBe('+3259254334332');
});
