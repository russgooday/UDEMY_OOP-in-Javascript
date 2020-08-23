const isEmptyObject = obj => (
  Object.prototype.toString.call(obj) === '[object Object]' && JSON.stringify(obj) === '{}'
)

/**
 * @param {Object} sourceObject
 * @returns {Object} - returns an object of keys and their property configurations
 */
const getObjectDescriptors = sourceObject => (
  isEmptyObject(sourceObject)
    ? sourceObject
    : Object.getOwnPropertyNames(sourceObject).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(sourceObject, key)
      return descriptors
    }, {})
)

/**
 * Extend Object from Parent
 * @param {Object} parent - Parent to use as prototype of newly created object
 * @param {Object} child - Child who's prototype will be assigned the newly created object
 * @param {Object} optional - Optional object to merge with child's new prototype
 */
const extend = (parent, child, optional = {}) => {
  child.prototype = Object.create(parent.prototype,
    Object.assign(
      {
        constructor: {
          value: child,
          enumerable: false,
          writable: true,
          configurable: true
        },
        __super: {
          get () { return parent },
          set (...args) { if (args.length) parent.apply(this, args) },
          configurable: false,
          enumerable: false
        }
      },
      getObjectDescriptors(optional)
    )
  )
}

/**
 * @param {Object} target
 * @param {...Objects} sources
 * @returns target object
 */
const mixin = (target, ...sources) => (
  Object.defineProperties(
    target,
    Object.assign({}, ...sources.map(getObjectDescriptors))
  )
)

export { extend, mixin }
