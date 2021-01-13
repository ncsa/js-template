import { sum } from './utils/math';

describe('app should', () => {
    beforeAll(() => {
        import('./app-ts');
    });

    test('initialize with two inputs', () => {
        expect(document.querySelectorAll('.input').length).toEqual(2);
    });

    test('add a new input on addButton click', () => {
        document.querySelector('button')?.click();
        expect(document.querySelectorAll('.input').length).toEqual(3);
    });

    test('update sum total when an input value changes', () => {
        const inputs = document.querySelectorAll<HTMLInputElement>('.input');
        const changeEvent = new Event('change');
        const values: number[] = [];
        inputs.forEach((input) => {
            const value = Math.random();
            values.push(value);
            input.value = value.toString();
            input.dispatchEvent(changeEvent);
            expect(document.querySelector('.output')?.innerHTML).toEqual(`Sum: ${sum(values)}`);
        });
    });
});
