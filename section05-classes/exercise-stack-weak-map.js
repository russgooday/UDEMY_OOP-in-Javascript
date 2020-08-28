// private variables stored in a WeakMap
const _stack = new WeakMap()

class Stack {
  constructor () {
    _stack.set(this, [])
  }

  push (item) {
    return _stack.get(this).push(item)
  }

  pop () {
    const items = _stack.get(this)

    if (items.length > 0) return items.pop()
    throw new Error('Stack is empty')
  }

  peek () {
    const items = _stack.get(this)

    if (items.length > 0) return items[items.length - 1]
    throw new Error('Stack is empty')
  }

  get count () {
    return _stack.get(this).length
  }

  * [Symbol.iterator] () {
    const items = _stack.get(this)

    for (let i = 0, len = items.length; i < len; i++) yield items[i]
  }
}

export { Stack }
