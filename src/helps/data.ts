// 转换 请求，响应时候的数据 处理

import { isNormalObject } from './untils'

export function transformRequest(data: any): any {
  // to do
  if (isNormalObject(data)) {
    return JSON.stringify(data)
  }
  return data
}
