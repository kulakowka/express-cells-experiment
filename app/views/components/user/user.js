'use strict'

const Component = require('component')

class User extends Component {
  show () {
    return `${this.data.firstName} ${this.data.lastName}`
  }
}

module.exports = User
