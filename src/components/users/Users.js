import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'user1',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v4',
        html_url: 'https://github.com/mojombo'
      },
      {
        id: '2',
        login: 'user2',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v4',
        html_url: 'https://github.com/mojombo'
      },
      {
        id: '3',
        login: 'user3',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v4',
        html_url: 'https://github.com/mojombo'
      }
    ]
  }

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1em'
}

export default Users
