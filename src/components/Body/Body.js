import React, { Component } from 'react'
import './Body.css'

const defaultHistory = ['15 + 5', '12 * 3']

class Body extends Component {
  // create react state variables
  state = {
    inputValue: '',
    historyValues: defaultHistory,
    historyIndex: 2,
    errorMessage: ''
  }

  handleChange = e => {
    // change the value of the input in the react state
    this.setState({
      inputValue: e.target.value
    })
  }

  handleKeyDown = e => {
    const {
      historyValues,
      historyIndex
    } = this.state
    // get index of the prev and next element
    const prevIndex = historyIndex - 1
    const nextIndex = historyIndex + 1

    // verify if the user press the enter key and execute the submit function
    if (e.keyCode === 13) {
      this.handleSubmit()
    }

    // verify if the user press the up key and has a prev element to set, and then set states
    if (e.keyCode === 38 && prevIndex >= 0) {
      this.setState({
        inputValue: historyValues[prevIndex],
        historyIndex: prevIndex,
      })
    }

    // verify if the user press the down key and has a next element to set, and then set states
    if (e.keyCode === 40 && nextIndex <= historyValues.length) {
      this.setState({
        inputValue: historyValues[nextIndex],
        historyIndex: nextIndex,
      })
    }
  }

  handleSubmit = () => {
    const { historyValues, inputValue } = this.state

    // clean the value if contain strange value as eval()
    const inputSanitized = inputValue.replace(/[^-()\d/*+.]/g, '')

    try {
      // if has inappropiates values return an error
      eval(inputValue)

      // add new value to the historyValues
      // clean inputValue
      // clean errorMessage
      // set new default index for the history of values
      this.setState({
        historyValues: [ ...historyValues, inputSanitized ],
        inputValue: '',
        errorMessage: '',
        historyIndex: historyValues.length + 1,
      })
    }
    catch(err) {
      // catch the value error and set the errorMessage to be shown in the UI
      this.setState({
        errorMessage: inputValue,
      })
    }
  }

  // render a calc item with the corresponding result
  renderCalcs = (item, index) => (
    <li key={index}>
      { `${item} = ${eval(item)}` }
    </li>
  )

  // verify if has error message and render it if there one
  renderError = () => {
    const { errorMessage } = this.state

    return errorMessage
      ? (
          <span>
            { `"${errorMessage}" cannot be calculated. Please enter a correct expression` }
          </span>
        )
      : ''
  }

  render() {
    return (
      <div className="app-body">
        <div className="terminal">
          <div className="terminal-body">
            <ul>
              {/* execute the renderCalcs method for each historyValues item  */}
              { this.state.historyValues.map(this.renderCalcs) }
            </ul>
          </div>
          <div className="terminal-footer">
            <input
              type="text"
              onKeyDown={ this.handleKeyDown }
              onChange={this.handleChange}
              placeholder="Insert your mathematical expression"
              value={ this.state.inputValue }
              ref={ element => this.input = element }
            />
            {/* execute the renderError method that show the error message if there one  */}
            { this.renderError() }
          </div>
        </div>
      </div>
    )
  }
}

export default Body
