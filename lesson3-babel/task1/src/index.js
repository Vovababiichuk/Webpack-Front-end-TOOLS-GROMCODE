const data = [1, 2, [3, 4, [5, 6]]];

const result = data.flat(Infinity);
console.log(result);

Promise.resolve().finally();