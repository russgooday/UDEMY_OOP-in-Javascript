const classof = obj => Object.prototype.toString.call(obj).slice(8, -1)

const isEmptyObject = obj => classof(obj) === 'Object' && JSON.stringify(obj) === '{}'

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
const extend = (Parent, Child, optional = {}) => {
  Child.prototype = Object.create(Parent.prototype,
    Object.assign(
      {
        constructor: {
          value: Child,
          enumerable: false,
          writable: true,
          configurable: true
        },
        _super: {
          value: Parent.prototype,
          configurable: false,
          enumerable: false,
          writable: false
        },
        _superCall: {
          value: Parent,
          configurable: false,
          enumerable: false,
          writable: false
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
