import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock.jsx';

export class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>Welcome, {this.props.name}, its currently <Clock/></div>
    );
  }
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

export default Welcome;
