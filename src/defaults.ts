import { AxiosRequestConfig } from './types'
import { processHeaders } from './helps/headers'
import { transformRequest, transformResponse } from './helps/data'

const defaults: AxiosRequestConfig = {
  method: 'get',
  timeout: 0,
  headers: {
    common: { Accept: 'application/json, text/plain, */*' }
  },
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  transformRequest: [
    function(data: any, headers: any): any {
      processHeaders(headers, data)
      return transformRequest(data)
    }
  ],
  transformResponse: [
    function(data: any): any {
      return transformResponse(data)
    }
  ]
}

const methodsNoData = ['delete', 'get', 'head', 'options']
methodsNoData.forEach(item => {
  defaults.headers[item] = {}
})

const methodsWidthData = ['post', 'put', 'patch']
methodsWidthData.forEach(item => {
  defaults.headers[item] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaults
