var _typeof = require("./typeof.js")["default"];
var _TypeError = require("error-cause/TypeError");
function _checkInRHS(value) {
  if (Object(value) !== value) throw _TypeError("right-hand side of 'in' should be an object, got " + (null !== value ? _typeof(value) : "null"));
  return value;
}
module.exports = _checkInRHS, module.exports.__esModule = true, module.exports["default"] = module.exports;