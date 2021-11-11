// Solution #1 one line
const isVavlueExistInTree = (arr, number) => arr.flat(Infinity).includes(number);

// Solution #2 recursive flat
const flatDeep = (arr, d = 1) => {
  return d > 0
    ? arr.reduce(
        (acc, val) =>
          acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
        []
      )
    : arr.slice();
}

const isVavlueExistInTree = (arr, number) => flatDeep(arr, Infinity).includes(number);

// Solution #3 // Not recursive flatten
const flatten = (arr) => {
  const stack = [...arr];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
}

const isVavlueExistInTree = (arr, number) => flatten(arr).includes(number);