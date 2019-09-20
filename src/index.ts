import { AxiosRequestConfig } from './types/index'
import xhr from './xhr'
import { buildURL } from './helps/url'
import { transformRequest } from './helps/data'
function axios(config: AxiosRequestConfig): void {
  // todo
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  // 发送之前-处理的config
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
export default axios
