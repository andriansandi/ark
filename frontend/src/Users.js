import React from 'react'
import {Helmet} from 'react-helmet'

class Users extends React.Component {
  render() {
    return (
      <div className="edx-app__users">
        <Helmet>
          <title>Daftar User</title>
        </Helmet>
        <h1>Users</h1>
      </div>
    )
  }
}
export default Users