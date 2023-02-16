import _ObjectGetPrototypeOf from "object.getprototypeof";
export default function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? _ObjectGetPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || _ObjectGetPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}