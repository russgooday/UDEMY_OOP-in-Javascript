// Note: #var is still at proposal stage and not adopted by all browsers
class Circle {
  #radius // private property

  constructor (radius) {
    this.#radius = radius
  }

  area () {
    return Math.PI * (Math.pow(this.#radius, 2))
  }
}

export { Circle }