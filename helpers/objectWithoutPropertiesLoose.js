var _ArrayPrototypeIndexOf = require("array.prototype.indexof");
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    var _excluded;
    key = sourceKeys[i];
    if ((_excluded = excluded, Array.isArray(_excluded) ? _ArrayPrototypeIndexOf : Function.call.bind(_excluded.indexOf))(_excluded, key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;