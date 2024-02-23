import { gammaincinv } from "../dist/esm/index.js";


let digits = 14;

test("Check gammaincinv function", () => {
    // results by gamma_inc_inv(a, p) in Julia SpecialFunction package
    expect(gammaincinv(0.0001, 2)).toBeCloseTo(0.014209237621777495, digits);
    expect(gammaincinv(0.1, 1)).toBeCloseTo(0.1053605156578263, digits);
    expect(gammaincinv(0.5, 5)).toBeCloseTo(4.670908882795985, digits);
    expect(gammaincinv(0.8, 7)).toBeCloseTo(9.07538528120425, digits);
    expect(gammaincinv(0.999, 9)).toBeCloseTo(21.15619816583998, digits - 1);
});
