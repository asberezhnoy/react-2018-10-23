import React, { Component } from 'react'
import Article from './Article'
import ExpandDecorator from '../decorators/ExpandDecorator'

class ArticleList extends Component {
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    var { articles } = this.props
    if (articles === undefined) return null

    var ExpandArticle = ExpandDecorator(Article)

    return articles.map((item) => {
      return (
        <li key={item.id}>
          {<ExpandArticle title={item.title} article={item} />}
        </li>
      )
    })
  }
}

export default ArticleList
