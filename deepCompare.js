const _ = require("lodash")

/**
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
function difference(object, base) {
	return _.transform(object, function (result, value, key) {
		if (!_.isEqual(value, base[key])) {
			result[key] =
				_.isObject(value) && _.isObject(base[key])
					? difference(value, base[key])
					: value
		}
	})
}

const obj1 = {
	a: {
		aa: 1,
		ab: 2,
	},
	b: 3,
}

const obj2 = {
	a: {
		aa: 1,
		ab: 3,
	},
	b: 4,
}

console.log(difference(obj2, obj1))
