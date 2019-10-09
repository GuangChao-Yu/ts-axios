import { transformRequest, transformResponse } from '../../src/helps/data'

describe('helps:data', () => {
  test('转换请求的string为普通object', () => {
    const a = { a: 1 }
    expect(transformRequest(a)).toBe('{"a":1}')
  })

  test('should do nothing if data is not a normalObject', () => {
    const a = new URLSearchParams('a=b')
    expect(transformRequest(a)).toBe(a)
  })

  describe('transformResponse', () => {
    test('should transform response data to object if data is a JSON string', () => {
      const a = '{"a":2}'
      expect(transformResponse(a)).toEqual({ a: 2 })
    })

    test('should do nothing if data is a string but not a JSON string', () => {
      const a = '{a:2}'
      expect(transformResponse(a)).toBe('{a:2}')
    })

    test('should do nothing if data is not a string', () => {
      const a = { a: 2 }
      expect(transformResponse(a)).toBe(a)
    })
  })
})
