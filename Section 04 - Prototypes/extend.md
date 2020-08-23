# Extend Script
Very much expanded upon from the course example given, I wanted to write my own extend script.

## __super
Included is a ***__super*** getter and setter, which is added to the extended object's prototype and enables you to *constructor borrow* from the parent constructor by simple calling `this.__super(args)` or retrieve the parent with `this.__super`. Emulating somewhat the ES6 class implementation of super()

## Adding optional members
In addition the extend script enables you to supply an optional object to mixin with the extended object's prototype

Example usage adding a getter and a method to the child's prototype:

```
extend(parent, child, {
  get name () {
    return this.name
  },
  sayHi() {
    console.log(`Hi ${this.name}`)
  }  
}
```

Copying getters and setters was a discovery. ***Object.assign*** evalutes these to key and values rather than copying the actual getter and setter

Example 
```
const obj = {
  x: 10,
  get posX() {
    return `${this.x}px`
  }
}

Object.assign({}, obj)

Output:
  posX: "10px" <-- evaluated instead of copying getter
  x: 10
  __proto__: Object
```

Using ***Object.getOwnPropertyDescriptors*** properties need to be broken down first into keys and object descriptors. Then with ***Object.defineProperties*** they can be assigned to the new object — functionality intact.

A good solution for this called ***assignComplete*** can be found on MDN's Object.assign page



