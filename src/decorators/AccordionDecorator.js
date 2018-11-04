import React, { Component } from 'react'

export default (OriginalComponent) =>
  class AccordionDecorator extends Component {
    state = {
      openItemId: null
    }

    render() {
      return (
        <OriginalComponent
          openTtemId={this.state.openItemId}
          toggleOpen={this.openItemHandler}
          {...this.props}
        />
      )
    }

    openItemHandler = (id) => this.setState({ openItemId: id })
  }
