const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return shuffled array', ()=> {
        const input = [1,2,3];
        const output = shuffleArray(input);
        expect(input).toEqual([1,2,3]);
        expect(output).toContain(1);
        expect(output).toContain(2);
        expect(output).toContain(3);
        expect(output).not.toEqual([1,2,3]);
    })
    test('return a array', () => {
        expect(Array.isArray(shuffleArray([1,2,3]))).toBe(true)
    })
})
