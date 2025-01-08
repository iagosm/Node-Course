const _ = require('lodash')


const a = [1, 2, 3, 4, 5 ,6];
const b = [4, 6, 9, 1, 11];

const diff = _.difference(a, b)
console.log(diff)