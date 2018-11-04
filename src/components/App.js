import React, { Component } from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import AccordionDecorator from '../decorators/AccordionDecorator'

class App extends Component {
  render() {
    var AccordionArticleList = AccordionDecorator(ArticleList)

    return (
      <div>
        <AccordionArticleList articles={articles} />
      </div>
    )
  }
}

export default App
