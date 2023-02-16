import _ArrayPrototypeIndexOf from "array.prototype.indexof";
import objectWithoutPropertiesLoose from "./objectWithoutPropertiesLoose.js";
export default function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      var _excluded;
      key = sourceSymbolKeys[i];
      if ((_excluded = excluded, Array.isArray(_excluded) ? _ArrayPrototypeIndexOf : Function.call.bind(_excluded.indexOf))(_excluded, key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}