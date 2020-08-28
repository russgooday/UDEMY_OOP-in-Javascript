const _radius = new WeakMap()
const _move = new WeakMap()

class Circle {
  constructor (radius) {
    _radius.set(this, radius)

    // arrow function for lexically scoping this
    _move.set(this, () => {
      console.log('move', this)
    })
  }

  draw () {
    _move.get(this)()

    console.log('draw')
  }
}

export { Circle }
