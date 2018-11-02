import React, { Component } from 'react'

export default (OriginComponen) =>
  class ExpandDecoratorComponent extends Component {
    state = {
      isOpen: this.props.isOpen
    }

    render() {
      var { title } = this.props
      console.log(this.props)
      console.log(this.state)

      return (
        <div>
          <h3>
            {title}
            <button onClick={this.handleClick}>
              {this.state.isOpen ? 'Закрыть' : 'Открыть'}
            </button>
          </h3>
          {this.getBody()}
        </div>
      )
    }

    handleClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    getBody() {
      return this.state.isOpen ? <OriginComponen {...this.props} /> : null
    }
  }
