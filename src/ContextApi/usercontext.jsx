import React, { createContext } from 'react';

const UserContext = createContext({
  username: '',
  usernametwo: '',
  menu: false,
  updateUserNameTwo: () => { },
  updateUsername: () => { },
  toggleMenu: () => {}
});

export class UserProvider extends React.Component {
  updateUsername = newUsername => {
    this.setState({ username: newUsername });
  };

  updateUserNameTwo = newUsername => {
    this.setState({ usernametwo: newUsername });
    console.log(newUsername);
  }

  toggleMenu = () => {this.setState({menu: !this.menu});  }  
  


  state = {
    username: 'user',
    usernametwo: 'user',
    updateUserNameTwo: this.updateUserNameTwo,
    updateUsername: this.updateUsername,
    menu: false,
    toggleMenu: this.toggleMenu
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
