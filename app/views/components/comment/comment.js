'use strict'

const Component = require('component')

class Comment extends Component {
  show (data) {
    data.time = Date.now()
    return this.render(data)
  }
}

module.exports = Comment
