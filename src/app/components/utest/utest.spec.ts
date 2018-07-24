import { UtestComponent } from './utest.component';
describe('calculator testing', function() {
var ob.calculator;
beforeAll(function() {
this.obj = new calculator();
});
it('increment function testing', function() {
    const result = this.obj.increment();
    expect(result).toBe(1);
});

it('decrement function testing', function() {
    const result = this.obj.decrement();
    expect(result).toBe(-1);
});
it('array testing', function() {
    expect (this.obj.my_array).toContain('angular');
});
});
