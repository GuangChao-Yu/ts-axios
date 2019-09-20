import { isNormalObject } from './untils'

function formatHeadName(headers: any, formatName: string): void {
  if (!headers) return
  Object.keys(headers).forEach(name => {
    if (name !== formatName && name.toLocaleUpperCase() === formatName.toLocaleUpperCase()) {
      headers[formatName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeadres(headers: any, data: any): any {
  formatHeadName(headers, 'Content-Type')
  if (isNormalObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Conent-Type'] = 'application/json;charset=utf-8'
    }
  }
}
