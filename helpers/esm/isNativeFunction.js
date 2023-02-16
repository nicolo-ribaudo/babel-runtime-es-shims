import _ArrayPrototypeIndexOf from "array.prototype.indexof";
export default function _isNativeFunction(fn) {
  var _Function$toString$ca;
  return (_Function$toString$ca = Function.toString.call(fn), Array.isArray(_Function$toString$ca) ? _ArrayPrototypeIndexOf : Function.call.bind(_Function$toString$ca.indexOf))(_Function$toString$ca, "[native code]") !== -1;
}