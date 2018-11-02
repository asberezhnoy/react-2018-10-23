import React, { Component } from 'react'

class Comment extends Component {
  render() {
    var { comment } = this.props
    console.log('Comment render ' + comment.id)

    return (
      <div>
        <section>{comment.text}</section>
      </div>
    )
  }
}

export default Comment
