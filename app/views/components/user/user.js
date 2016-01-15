'use strict'

const Component = require('component')

class User extends Component {
  show (data) {
    return `${data.firstName} ${data.lastName}`
  }
}

module.exports = User
