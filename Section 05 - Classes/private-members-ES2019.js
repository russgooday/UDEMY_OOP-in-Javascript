// Note: Still at proposal stage
class Circle {
  #radius // private property

  constructor (radius) {
    this.#radius = radius
  }

  area () {
    return Math.PI * (Math.pow(this.#radius, 2))
  }
}

const c1 = new Circle(10)