import Debug from 'debug';

const debug = Debug('bool-is-bool');

const isBool = (input: any) => {
  debug(typeof input);
  if (typeof input !== 'boolean') {
    return false;
  }
  return input;
};

export const isFalse = (input: any) => {
  return isBool(input) === false;
};

export const isTrue = (input: any) => {
  return isBool(input) === true;
};

export default { isFalse, isTrue };
