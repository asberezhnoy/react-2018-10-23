import React, { Component } from 'react'
import Comment from './Comment'
import ExpandDecorator from '../decorators/ExpandDecorator'

class CommentList extends Component {
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    var { comments } = this.props
    if (comments === undefined) return null
    var ExpandComment = ExpandDecorator(Comment)

    return comments.map((item) => {
      return (
        <li key={item.id}>
          {<ExpandComment title={item.user} comment={item} />}
        </li>
      )
    })
  }
}

export default CommentList
