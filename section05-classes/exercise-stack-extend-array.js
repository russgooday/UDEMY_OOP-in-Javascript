class Stack extends Array {
  static get [Symbol.species] () { return Array }

  pop () {
    if (this.length > 0) {
      return super.pop()
    }
    throw new Error('Stack is empty')
  }

  peek () {
    if (this.length > 0) {
      return this[this.length - 1]
    }
    throw new Error('Stack is empty')
  }

  get count () {
    return this.length
  }
}

export { Stack }
