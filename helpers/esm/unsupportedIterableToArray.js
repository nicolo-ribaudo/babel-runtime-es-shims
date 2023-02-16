import _FunctionPrototypeName from "function.prototype.name";
import _ArrayFrom from "array.from";
import arrayLikeToArray from "./arrayLikeToArray.js";
export default function _unsupportedIterableToArray(o, minLen) {
  var _o$constructor;
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = (_o$constructor = o.constructor, typeof _o$constructor === "function" ? _FunctionPrototypeName(_o$constructor) : _o$constructor.name);
  if (n === "Map" || n === "Set") return _ArrayFrom(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}