import { Validator } from "../js/regexp";

test('valid test', () => {
    const valid = new Validator()
    expect(valid.validateUserName('asd123asd')).toEqual(true)
})

test('don\'t valid four numbers', () => {
    const valid = new Validator()
    expect(valid.validateUserName('asd1234asd')).toEqual(false)
})

test('don\'t valid to begin _', () => {
    const valid = new Validator()
    expect(valid.validateUserName('_asd134asd')).toEqual(false)
})

test('don\'t valid to finish -', () => {
    const valid = new Validator()
    expect(valid.validateUserName('asd234asd-')).toEqual(false)
})