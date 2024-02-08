import boolIsBool from "../src/index";

describe("String is bool?", function () {
  const falsyStringValues = ["false", ""];
  const truthyStringValues = ["true", "test", new String()];
  for (let i = 0; i < falsyStringValues.length; i++) {
    const falsyStringValue = falsyStringValues[i];
    it(`'${falsyStringValue}' should return always false`, function () {
      expect(boolIsBool.isFalse(falsyStringValue)).toBeTruthy();
    });
  }
  for (let i = 0; i < truthyStringValues.length; i++) {
    const truthyStringValue = truthyStringValues[i];
    it(`'${truthyStringValue}' should return always false`, function () {
      expect(boolIsBool.isTrue(truthyStringValue)).toBeFalsy();
    });
  }
});
describe("Number is bool?", function () {
  const falsyNumValues = [0, -1];
  const truthyNumValues = [2, Math.random() + 1];
  for (let i = 0; i < falsyNumValues.length; i++) {
    const falsyNumValue = falsyNumValues[i];
    it(`'${falsyNumValue}' should return always false`, function () {
      expect(boolIsBool.isFalse(falsyNumValue)).toBeTruthy();
    });
  }
  for (let i = 0; i < truthyNumValues.length; i++) {
    const truthyNumValue = truthyNumValues[i];
    it(`'${truthyNumValue}' should return always false`, function () {
      expect(boolIsBool.isTrue(truthyNumValue)).toBeFalsy();
    });
  }
});
describe("Function is bool?", function () {
  const falsyFnValues = [function () {}, () => {}, new Function()];
  for (let i = 0; i < falsyFnValues.length; i++) {
    const falsyFnValue = falsyFnValues[i];
    it(`'${falsyFnValue}' should return always false`, function () {
      expect(boolIsBool.isFalse(falsyFnValue)).toBeTruthy();
    });
  }
});
describe("Object is bool?", function () {
  const falsyObjValues = [null];
  const truthyObjValues = [{}, new Object()];
  for (let i = 0; i < falsyObjValues.length; i++) {
    const falsyObjValue = falsyObjValues[i];
    it(`'${falsyObjValue}' should return always false`, function () {
      expect(boolIsBool.isFalse(falsyObjValue)).toBeTruthy();
    });
  }
  for (let i = 0; i < truthyObjValues.length; i++) {
    const truthyObjValue = truthyObjValues[i];
    it(`'${truthyObjValue}' should return always false`, function () {
      expect(boolIsBool.isTrue(truthyObjValue)).toBeFalsy();
    });
  }
});
describe("Bool is bool?", function () {
  it(`'false' should return always false`, function () {
    expect(boolIsBool.isFalse(false)).toBeTruthy();
  });
  it(`'true' should return always true`, function () {
    expect(boolIsBool.isTrue(true)).toBeTruthy();
  });
});
