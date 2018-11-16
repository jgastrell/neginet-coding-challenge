import React, { Component } from 'react'

import Body from '../Body'

import './App.css'


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p>
            Coding challenge Neginet
          </p>
        </header>
        <main className="app-container">
          <Body />
        </main>
      </div>
    )
  }
}

export default App
