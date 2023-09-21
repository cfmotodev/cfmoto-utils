function sort(value) {
  /* eslint-disable no-caller,no-restricted-properties */
  // const current = arguments?.callee;
  // const callee = arguments?.callee;
  if (value === undefined) {
    return undefined;
  }
  if (value === null || typeof value === 'string' || typeof value === 'number') {
    return value;
  }

  if (value instanceof Array) {
    return value.map((item) => sort(item));
  }
  if (typeof value === 'object') {
    const newValue = {};
    Object.keys(value)
      .sort()
      .forEach((key) => {
        // newValue[key] = sort(value[key]);
        newValue[key] = value[key];
      });
    return newValue;
  }
  return value;
  /* eslint-enable no-caller,no-restricted-properties  */
}

function stringify(value, reviver) {
  return JSON.stringify(sort(value), reviver);
}
function parse(value, reviver) {
  return JSON.parse(sort(value), reviver);
}

export default { stringify, parse };
