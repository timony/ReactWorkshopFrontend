import React from 'react';
import {homeLabel} from '../../services/functions';

export class Home extends React.Component {
  render() {
    const element = (
      <div>{homeLabel()}</div>
    );

    return (
      element
    );
  }
}

export default Home;
