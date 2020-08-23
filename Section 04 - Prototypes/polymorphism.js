// helper extend method
function extendWithInstance (Child, Parent) {
  Child.prototype = new Parent()
  Child.prototype.constructor = Child
  return Child
}

// Base object to inherit from
function HtmlElement () {
  this.click = function () {
    console.log('clicked')
  }
}

HtmlElement.prototype.focus = function () {
  console.log('focused')
}

function HtmlSelectElement (items = []) {
  this.items = items

  this.addItem = function (item) {
    this.items.push(item)
  }

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  this.render = function () {
    const options = this.items.reduce((strg, item) => `${strg}  <option>${item}</option>\n`, '')

    return (`<select>\n${options}</select>`)
  }
}

extendWithInstance(HtmlSelectElement, HtmlElement)

function HtmlImageElement (url = '') {
  this.src = url

  this.render = function () {
    return (`<img src='${this.src}' />`)
  }
}

extendWithInstance(HtmlImageElement, HtmlElement)

const logElement = elem => console.log(elem.render())

;[
  new HtmlSelectElement(['a', 'b', 'c']),
  new HtmlImageElement('http://')
].forEach(logElement)
