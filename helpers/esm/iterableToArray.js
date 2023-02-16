import _ArrayFrom from "array.from";
export default function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return _ArrayFrom(iter);
}