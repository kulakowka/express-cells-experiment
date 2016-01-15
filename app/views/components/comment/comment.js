'use strict'

const Component = require('component')

class Comment extends Component {
  show () {
    this.data.time = Date.now()
    return this.render(this.data)
  }
}

module.exports = Comment
