import _ArrayPrototypeFilter from "array.prototype.filter";
import defineProperty from "./defineProperty.js";
export default function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);
    if (typeof Object.getOwnPropertySymbols === 'function') {
      var _Object$getOwnPropert;
      ownKeys.push.apply(ownKeys, (_Object$getOwnPropert = Object.getOwnPropertySymbols(source), Array.isArray(_Object$getOwnPropert) ? _ArrayPrototypeFilter : Function.call.bind(_Object$getOwnPropert.filter))(_Object$getOwnPropert, function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }
    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }
  return target;
}