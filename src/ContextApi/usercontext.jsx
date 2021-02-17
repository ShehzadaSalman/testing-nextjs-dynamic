import React, { createContext } from 'react';

const UserContext = createContext({
  username: '',
  usernametwo: '',
  updateUserNameTwo: () => { },
  updateUsername: () => { },
});

export class UserProvider extends React.Component {
  updateUsername = newUsername => {
    this.setState({ username: newUsername });
  };

  updateUserNameTwo = newUsername => {
    this.setState({ usernametwo: newUsername });
    console.log(newUsername);
  }

  state = {
    username: 'user',
    usernametwo: 'user',
    updateUserNameTwo: this.updateUserNameTwo,
    updateUsername: this.updateUsername,
  };

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
