import { isNormalObject, deepMerge } from './untils'
import { Method } from '../types'

function formatHeadName(headers: any, formatName: string): void {
  if (!headers) return
  Object.keys(headers).forEach(name => {
    if (name !== formatName && name.toLocaleUpperCase() === formatName.toLocaleUpperCase()) {
      headers[formatName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  formatHeadName(headers, 'Content-Type')

  if (isNormalObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }
  return headers
}

export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return headers
  }

  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) return
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}

export function flattenHeaders(headers: any, method: Method): any {
  if (!headers) {
    return headers
  }
  headers = deepMerge(headers.common, headers[method], headers)

  const methodsToDelete = ['delete', 'get', 'head', 'options', 'post', 'put', 'patch', 'common']
  methodsToDelete.forEach(item => {
    delete headers[item]
  })
  return headers
}
