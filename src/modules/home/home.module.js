import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserVisible } from '../../actions';
import { ShowUserComponent } from '../../components/show-user/show-user.component';

export class HomeModule extends Component {

  render() {
    return (
      <div>
        <h1>Hello from home</h1>
        <ShowUserComponent updateUserVisible={ this.props.updateUserVisible } />
      </div>
    )
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserVisible: (id) => {
      dispatch(updateUserVisible(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeModule)

