import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserDaata } from '../../actions';
import store from '../../store';

export class ShowUserComponent extends Component {
  constructor() {
    super();
    this.state = { user: {} }
  }

  getUser(userData) {
    const getUser = mapStateToProps(userData);
    const userSelected = store.dispatch(getUser);
    mapDispatchToProps(userSelected);
  }

  showUsers() {
    const { users } = this.props;
    console.log(users)
    return users.map((user, key) => {
      if (user.id !== null) return (<div key={ key } ><p>{ user.firstname }</p><button onClick={ this.getUser.bind(this, user) } >mostrar</button></div>);
      return (<div key={ key } >No hay usuarios registrados</div>);
    })
  }

  render() {
    return (
      <div>
        { this.showUsers() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return getUserDaata(state);
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(id)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUserComponent)
