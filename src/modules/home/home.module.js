import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShowUserComponent } from '../../components/show-user/show-user.component';
import store from '../../store';

export class HomeModule extends Component {
  users = [];

  getUsers() {
    return this.users = store.getState().user;
  }

  render() {
    this.getUsers();
    return (
      <div>
        <h1>Hello from home</h1>
        <ShowUserComponent users={ this.users } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(id)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeModule)

