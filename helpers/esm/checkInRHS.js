import _typeof from "./typeof.js";
import _TypeError from "error-cause/TypeError";
export default function _checkInRHS(value) {
  if (Object(value) !== value) throw _TypeError("right-hand side of 'in' should be an object, got " + (null !== value ? _typeof(value) : "null"));
  return value;
}