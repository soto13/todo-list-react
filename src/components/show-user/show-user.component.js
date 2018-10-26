import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserVisible } from '../../actions';
import store from '../../store';

export class ShowUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { usersDivs: (<div></div>), dataUser: (<div></div>), showData: false, divKey: '' }
  }

  showUser(user, key, show = false) {
    this.setState({
      dataUser: (
        <div key={ key } >
          <p>Apellido: { user.lastname }</p>
          <p>Teléfono: { user.phone }</p>
          <p>Es visible: { (user.isVisible) ? 'si' : 'no' }</p>
          <button onClick={ this.changeVisible.bind(this, user.id) } >cambiar</button>
        </div>
      ),
      showData: !this.state.showData,
      divKey: key
    })
    return 
  }

  showUsers() {
    const { users } = this.props;

    return users.map((user, key) => {
      if (user.id !== null) return (
        <div key={ user.id } >
          <p>{ user.firstname }</p>
          { (this.state.showData) && (this.state.divKey === user.id)  && (this.state.dataUser) }
          <button onClick={ this.showUser.bind(this, user, user.id) } >mostrar</button>
        </div>
      );
      return (<div key={ key } >No hay usuarios registrados</div>);
    })
  }

  changeVisible(id) {
    const changeVisible = mapStateToProps(id);
    mapDispatchToProps(store.dispatch(changeVisible));
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
  return updateUserVisible(state);
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(id)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUserComponent)
