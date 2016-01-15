/*!
 * Component-express
 *
 * Copyright(c) 2016 Anton Kulakov
 * MIT Licensed
 */

'use strict'

/**
 * Module dependencies.
 * @private
 */
const path = require('path')
const jade = require('jade')

// settings
var cacheEnabled = false
var viewsPath = ''

class Component {
  constructor (name, template, data) {
    this.name = name
    this.template = template
    this.data = data
  }

  show () {
    return this.render(this.data)
  }

  render (locals) {
    var fn = jade.compileFile(this.template, {filename: this.name, cache: cacheEnabled})
    locals.Component = renderComponent
    return fn(locals)
  }

  static middleware (options) {
    return (req, res, next) => {
      viewsPath = res.app.get('views')
      cacheEnabled = res.app.get('view cache')
      res.locals.Component = renderComponent
      next()
    }
  }
}

module.exports = Component

function renderComponent (name, data) {
  const Component = getComponent(name)
  const template = path.resolve(viewsPath, 'components', name, name + '.jade')  // TODO: remove jade dependencies
  let component = new Component(name, template, data)
  return component.show(data)
}

function getComponent (name) {
  const file = path.resolve(viewsPath, 'components', name, name)
  return require(file)
}
