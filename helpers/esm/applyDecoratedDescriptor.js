import _ArrayPrototypeReduce from "array.prototype.reduce";
export default function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var _decorators$slice$rev;
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = (_decorators$slice$rev = decorators.slice().reverse(), Array.isArray(_decorators$slice$rev) ? _ArrayPrototypeReduce : Function.call.bind(_decorators$slice$rev.reduce))(_decorators$slice$rev, function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}