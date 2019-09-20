const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object,object]'
}

export function isObject(val: any): val is Object {
  return val != null && typeof val === 'object'
}

// 是否是普通对象
export function isNormalObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}
