// Todo - Read up on Symbols
// Standard JS Error - Expected Symbol to have a description
const _radius = Symbol()
const _area = Symbol()

class Circle {
  constructor (radius) {
    this[_radius] = radius
  }

  [_area] () {
    return Math.PI * (Math.pow(this[_radius], 2))
  }
}

const c1 = new Circle(10)

// hack to get access to the property
const key = Object.getOwnPropertySymbols(c1)[0]
console.log(c1[key])
