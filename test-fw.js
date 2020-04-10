const describe = (desc, callback) => {
	console.log(desc);
	callback();
};

const it = (msg, callback) => describe('  ' + msg, callback);

const matchers = (expectedValue) => ({
	toBe: (assertion) => {
		if (expectedValue === assertion) {
			console.log('pass');
			return true;
		} else {
			console.log('fail');
			return false;
		}
	},
});

const expect = (exp) => matchers(exp);

module.exports = {
	describe,
	expect,
	it,
	matchers,
};
