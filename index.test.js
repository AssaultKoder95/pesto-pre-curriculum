const { describe, it, expect, matchers } = require('./test-fw');
const { add, subtract, multiply, divide } = require('./index');

describe('Testing Mathematical functions', () => {
	describe('Addition', () => {
		it('Should add 2 integers', () => {
			let result = add(10, 20);
			expect(result).toBe(30);
		});

		it('Should return param A if the param B is missing', () => {
			let result = add(10, null);
			expect(result).toBe(10);
		});

		it('Should return param B if the param A is missing', () => {
			let result = add(null, 10);
			expect(result).toBe(10);
		});
	});

	describe('Subtraction', () => {
		it('Should subtract 2 integers', () => {
			let result = subtract(20, 10);
			expect(result).toBe(10);
		});

		it('Should return param A if the param B is missing', () => {
			let result = subtract(10, null);
			expect(result).toBe(10);
		});

		it('Should return negative value of param B if the param A is missing', () => {
			let result = subtract(null, 10);
			expect(result).toBe(-10);
		});
	});

	describe('Multiplication', () => {
		it('Should multiply 2 integers', () => {
			let result = multiply(5, 2);
			expect(result).toBe(10);
		});

		it('Should return 0 if the param B is missing', () => {
			let result = multiply(10, null);
			expect(result).toBe(0);
		});

		it('Should return 0 if the param A is missing', () => {
			let result = multiply(null, 10);
			expect(result).toBe(0);
		});
	});

	describe('Division', () => {
		it('Should divide 2 integers', () => {
			let result = divide(20, 2);
			expect(result).toBe(10);
		});

		it('Should return infinity if the param B is missing', () => {
			let result = divide(10, null);
			expect(result).toBe(Infinity);
		});

		it('Should return 0 if the param A is missing', () => {
			let result = divide(null, 10);
			expect(result).toBe(0);
		});
	});
});
