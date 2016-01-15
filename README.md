Experiment with [jade](http://jade-lang.com/) and [express.js](http://expressjs.com/) inspired by [Rails Trailblazer Cells](http://trailblazer.to/gems/cells/).

#### Start server 

```bash
npm install
npm start
```

## Controller

`./app/server.js`

```javascript
let app = express()

// ...

app.use(require('component').middleware())

// ...

app.get('/', (req, res) => {
  const user = {
    firstName: 'Anton',
    lastName: 'Kulakov'
  }

  const comment = {
    id: 1,
    text: 'Comment text example',
    user
  }

  const meta = {
    title: 'Home page'
  }

  res.render('index', {
    user,
    meta,
    comment
  })
})
```

## View

`./app/views/index.jade`

```jade
!= Component("header", meta)

.homePage
  = "Home"
  != Component("comment", comment)

.userInfo
  != Component("user", user)
```



## Components:

##### Comment

`./app/views/components/comment/comment.jade`

```jade
.comment
  .id= id
  .text= text
  .time= time
  != Component("user", user)
```

`./app/views/components/comment/comment.js`

```javascript
'use strict'

const Component = require('component')

class Comment extends Component {
  show () {
    this.data.time = Date.now()
    return this.render(this.data)
  }
}

module.exports = Comment
```

##### User

`./app/views/components/user/user.js`

```javascript
'use strict'

const Component = require('component')

class User extends Component {
  show () {
    return `${this.data.firstName} ${this.data.lastName}`
  }
}

module.exports = User
```

##### Header

`./app/views/components/header/header.jade`

```jade
header
  .pageTitle= title
```

`./app/views/components/header/header.js`

```javascript
'use strict'

const Component = require('component')

class Header extends Component {
}

module.exports = Header
```
