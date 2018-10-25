import React, { Component } from 'react';
import { pathReducer } from '../../reducers';

class UserModule extends Component {
  render() {
    return (
      <div>
        <h1>Hello from user</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: pathReducer(state.path, ownProps.filter)
  };
};

export default UserModule;
