import React from 'react';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      name: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    const login = (
      <form onSubmit={this.handleLogin}>
        Name: <input type="text" value={this.state.name} onChange={this.handleChange}/>
        <input type="submit" value="Login"/>
      </form>
    );

    const logout = (
      <div>Logged in: {this.state.name} <button onClick={this.handleLogoutClick}>Logout</button></div>
    );

    const content = isLoggedIn ?
      logout : login;

    return (
      <div>{content}</div>
    );
  }

  handleLogin(event) {
    this.setState({isLoggedIn: true});
    event.preventDefault();
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }
}

export default LoginControl;
