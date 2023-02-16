import _ObjectDefineProperties from "object.defineproperties";
export default function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(_ObjectDefineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}