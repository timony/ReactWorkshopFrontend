import React from 'react';
import {getUserName} from '../../services/functions';

import Welcome from '../components/Welcome.jsx';
import LoginControl from '../components/LoginControl.jsx';

export class Home extends React.Component {
  render() {
    const element = (
      <div>
        <LoginControl/>
        <Welcome name={getUserName()}/>
      </div>
    );

    return (
      element
    );
  }
}

export default Home;
