/*
  wrapping the class code in a factory function as each
  instance of stack will need it's own unique counter
*/
const Stack = () => {
  // private counter
  let count = 0

  class Stack {
    push (item) {
      this[count++] = item
      return count // return new length
    }

    pop () {
      if (count > 0) {
        const popped = this[--count]
        delete (this[count])
        return popped // return popped value
      }
      throw new Error('Stack is empty')
    }

    peek () {
      if (count > 0) return this[count - 1]
      throw new Error('Stack is empty')
    }

    get count () {
      return count
    }

    * [Symbol.iterator] () {
      for (let i = 0; i < count; i++) yield this[i]
    }
  }

  return new Stack()
}

export { Stack }
