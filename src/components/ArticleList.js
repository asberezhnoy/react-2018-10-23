import React, { Component } from 'react'
import Article from './Article'
import ExpandDecorator from '../decorators/ExpandDecorator'

class ArticleList extends Component {
  render() {
    return <ul>{this.items}</ul>
  }

  onOpen = (id) => {
    if (this.props.toggleOpen) this.props.toggleOpen(id)
  }

  onClose = (id) => {
    if (this.props.toggleOpen) this.props.toggleOpen(null)
  }

  get items() {
    var { articles } = this.props
    if (articles === undefined) return null

    var ExpandArticle = ExpandDecorator(Article)

    return articles.map((item) => {
      return (
        <li key={item.id}>
          {
            <ExpandArticle
              id={item.id}
              title={item.title}
              isOpen={this.props.openTtemId === item.id}
              article={item}
              onOpen={this.onOpen}
              onClose={this.onClose}
            />
          }
        </li>
      )
    })
  }
}

export default ArticleList
