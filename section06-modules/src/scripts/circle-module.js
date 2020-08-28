// implementation detail
const _radius = new WeakMap()

// public interface
class Circle {
  constructor (radius) {
    _radius.set(this, radius)
  }

  draw () {
    console.log('draw')
  }
}

module.exports = Circle
