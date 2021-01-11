import { sum } from './math';

test('add two numbers', () => {
    expect(sum([1, 2])).toBe(3);
});
