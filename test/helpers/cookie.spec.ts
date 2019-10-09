import cookie from '../../src/helps/cookie'

describe('helps:cookie', () => {
  test('测试读取cookie', () => {
    document.cookie = 'foo=baz'
    expect(cookie.read('foo')).toBe('baz')
  })

  test('如果没有对应名字的cookie,返回null', () => {
    document.cookie = 'foo=baz'
    expect(cookie.read('bar')).toBeNull()
  })
})
