"use strict";
var person = {
    age: 22,
    extendedValue: 'aaa',
    name: 'asdsa',
};
console.log('a', person);
var printName = function (params) {
    console.log(params.name);
};
//
// interface IObject {
//   a: string;
//   b: string;
//   c: string;
// }
// type TKey = keyof IObject;
var getProperty = function (obj, key) {
    return obj[key];
};
var arr = [1, 'string', true];
//# sourceMappingURL=index.js.map