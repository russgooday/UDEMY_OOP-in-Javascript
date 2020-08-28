import { extend } from './extend.js'

function Shape (name, colour) {
  this.name = name
  this.colour = colour
}

Object.defineProperties(Shape.prototype, {
  description: {
    get () {
      return `This ${this.name} is ${this.colour}`
    }
  }
})

function Square (name, colour, size) {
  this._super(name, colour)
  this.size = size
}

extend(
  Shape,
  Square,
  {
    get area () {
      return Math.pow(this.size, 2)
    }
  }
)

export { Square }
