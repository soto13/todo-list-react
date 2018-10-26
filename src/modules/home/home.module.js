import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ShowUserComponent } from '../../components/show-user/show-user.component';

export class HomeModule extends Component {

  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>Hello from home</h1>
        <ShowUserComponent users={ user } />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
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

