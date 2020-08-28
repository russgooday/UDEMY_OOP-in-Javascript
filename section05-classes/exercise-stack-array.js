/*
  wrapping the class code in a factory function as each
  instance of stack will need it's own unique counter
*/
const Stack = () => {
  const stack = []

  class Stack {
    push (item) {
      return stack.push(item)
    }

    pop () {
      if (stack.length > 0) return stack.pop()
      throw new Error('Stack is empty')
    }

    peek () {
      if (stack.length > 0) return stack[stack.length - 1]
      throw new Error('Stack is empty')
    }

    count () {
      return stack.length
    }
  }

  return new Stack()
}

export { Stack }
