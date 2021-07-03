const help = require('./helpers');

describe('helpers module', () => {
    describe('sum function', () => {
        it('can add two numbers', () => {
            const expectedOutput = 10;
            const actualOutput = help.sum(2, 5);
            expect(actualOutput).toBe(expectedOutput);
        })
    });
})