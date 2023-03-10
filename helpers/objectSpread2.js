var _ArrayPrototypeFilter = require("array.prototype.filter");
var _ObjectGetOwnPropertyDescriptors = require("object.getownpropertydescriptors");
var _ObjectDefineProperties = require("object.defineproperties");
var defineProperty = require("./defineProperty.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var _symbols;
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = (_symbols = symbols, Array.isArray(_symbols) ? _ArrayPrototypeFilter : Function.call.bind(_symbols.filter))(_symbols, function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : _ObjectGetOwnPropertyDescriptors ? _ObjectDefineProperties(target, _ObjectGetOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;