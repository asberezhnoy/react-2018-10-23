import React, { Component } from 'react'
import CommentList from './CommentList'
import ExpandDecorator from '../decorators/ExpandDecorator'

class Article extends Component {
  render() {
    var ExpandCommentList = ExpandDecorator(CommentList)
    var { article } = this.props

    console.log('Article render ' + article.id)

    return (
      <div>
        <section>{article.text}</section>
        <ExpandCommentList
          isOpen={false}
          title="Комментарии"
          comments={article.comments}
        />
      </div>
    )
  }
}

export default Article
