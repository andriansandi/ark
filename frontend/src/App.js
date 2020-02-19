import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/users">Users</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default App