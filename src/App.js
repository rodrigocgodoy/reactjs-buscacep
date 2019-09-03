import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'

import Routes from './routes'

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Routes />
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: content-box;
    background-color: #f2f2f2;
    font-family: Arial, Helvetica, sans-serif;
    color: #333;
  }
`

export default App;