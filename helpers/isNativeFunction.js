var _ArrayPrototypeIndexOf = require("array.prototype.indexof");
function _isNativeFunction(fn) {
  var _Function$toString$ca;
  return (_Function$toString$ca = Function.toString.call(fn), Array.isArray(_Function$toString$ca) ? _ArrayPrototypeIndexOf : Function.call.bind(_Function$toString$ca.indexOf))(_Function$toString$ca, "[native code]") !== -1;
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;