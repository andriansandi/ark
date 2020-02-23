/**
 * App Components
 * 
 * @author    Sandi Andrian <sandi.andrian@eduxa.id>
 * @since     Feb 21, 2020
 */
import React from 'react'

// Library Components
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

// Pages Components
import Users from './Users'
import Contact from './Contact'

// UI Components
// import { Button } from 'evergreen-ui'
import { Button } from "@blueprintjs/core"

// UI Components
import TopBar from './components/ui/TopBar'

class App extends React.Component {
  render() {
    return (
      <AppWrapper className="edx-app">
        <TopBar />
        <h1>Home</h1>
        <Button className="bp3-intent-primary">Hello World!</Button>
      </AppWrapper>
    )
  }
}

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
`

export default App