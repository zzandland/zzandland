import React, { Component } from 'react';
import Portrait from './Portrait';
import Main from '../containers/Main';

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { initializeBio, bio } = this.props;
    if (JSON.stringify(bio) === '{}') initializeBio();
  }

  render() {
    return (
      <div className="wrapper">
        <Portrait />
        <Main />
      </div>
    );
  }
}

export default Wrapper;
