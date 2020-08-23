// constructor function
const Stopwatch = function () {
  // private variables
  let time = 0
  let started = false

  // private helper method
  const duration = time => new Date().getTime() - time

  // object's own methods
  this.start = function () {
    if (started) throw new Error('Stopwatch already started')
    time = new Date().getTime()
    started = true
  }

  this.stop = function () {
    if (!started) throw new Error('Stopwatch already stopped')
    time = duration(time)
    started = false
  }

  this.reset = function () {
    time = 0
    started = false
  }

  // duration getter
  Object.defineProperties(this, {
    duration: {
      enumerable: false,
      configurable: false,
      get () {
        return ((started) ? duration(time) : time) / 1000
      }
    }
  })
}
