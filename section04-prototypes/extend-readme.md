# Extend Script
Expanding upon the course example below
```
function extend (Parent, Child) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}
```
I wanted to add some extra functionality, starting with ...

## _superCall
***_superCall*** is simply a reference to the Parent constructor. It can be used in the child constructor to *constructor borrow* from the parent by calling `this._superCall(args)`

## _super
Similarly ***_super*** is a reference to the Parent.prototype and can be accessed with `this.super`

## Adding optional members
In addition there is an optional third argument which takes an object to mixin with the extended object's prototype

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

Copying accessors was a discovery. **Object.assign** evalutes these to key and value pairs rather than copying the actual accessor methods.

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

Using ***Object.getOwnPropertyDescriptors***, object members need to be converted into key and object descriptor pairs. With ***Object.defineProperties*** they can then be assigned to the new object — functionality intact.

A full solution for this is called ***assignComplete*** and can be found on MDN's Object.assign page

## mixin

Following on from extend, the following course example also runs into potentially similar issues with accessors

```
function mixin(target, ...sources){
  Object.assign(target, ...sources)
}
```
Utitlising some existing functions in the extend script it was pretty straight forward to write a mixin function that will work with accessors. I have bolted this onto the extend script for the timebeing.

Usage is the same as the course example `mixin(targetObject, sourceObject1, sourceObject1 etc)`

A simple test
```
var obj1 = {
  x: 10,
  get currentPos () {
    return `x: ${this.x}`
  }
}

var obj2 = {
  y: 20,
  get currentPos () {
    return `x: ${this.x}  y: ${this.y}`
  }
}

const target = {}
console.dir(mixin(target, obj1, obj2))
// Output
Object
  x: 10
  y: 20
  // note obj2's getter over-rides obj1's
  get currentPos: ƒ currentPos( return `x: ${this.x}  y: ${this.y}` )
  __proto__: Object

target.currentPos // Output "x: 10  y: 20"
```
