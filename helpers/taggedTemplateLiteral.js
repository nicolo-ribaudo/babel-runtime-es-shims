var _ObjectDefineProperties = require("object.defineproperties");
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(_ObjectDefineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}
module.exports = _taggedTemplateLiteral, module.exports.__esModule = true, module.exports["default"] = module.exports;