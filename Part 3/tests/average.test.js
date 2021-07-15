const average = require('../utils/for_testing').average

test('average of an value is the value itself', () => {
	expect(average([1])).toBe(1)
})

test('average of an value is the value itself', () => {
	expect(average([1, 2, 3, 4, 5])).toBe(3)
})

test('of empty array is zero', () => {
    expect(average([])).toBe(0)
})