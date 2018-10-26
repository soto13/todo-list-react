import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserDaata } from '../../actions';
import store from '../../store';

class UserModule extends Component {
  constructor(props) {
    super(props);
    this.state = { firstname: '', lastname: '', phone: '' };
  }

  lenghtToGetText(text) {
    if (text.length > 3) return true;
    return false;
  }

  setFirstName(event) {
    const firstname = event.target.value;
    return (this.lenghtToGetText(firstname)) ? this.setState({ firstname }) : null;
  }

  setLastName(event) {
    const lastname = event.target.value;
    return (this.lenghtToGetText(lastname)) ? this.setState({ lastname }) : null;

  }

  setPhone(event) {
    const phone = event.target.value;
    return (this.lenghtToGetText(phone)) ? this.setState({ phone }) : null;
  }

  addUser() {
    const { firstname, lastname, phone } = this.state;

    if (firstname && lastname && phone) {
      const stateProps = mapStateToProps({ firstname,  lastname,  phone });
      mapDispatchToProps(store.dispatch(stateProps));
      return;
    }
    return console.log('Debes llenar los datos');
  }
  
  render() {
    return (
      <div>
        <h1>Hello from user</h1>
        <input type='text' placeholder='firstname' onChange={ (e) => this.setFirstName(e) } ></input>
        <input type='text' placeholder='lastname' onChange={ (e) => this.setLastName(e) } ></input>
        <input type='text' placeholder='phone' onChange={ (e) => this.setPhone(e) } ></input>
        <button onClick={ this.addUser.bind(this) } >Click</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  if (state.firstname) {
    return setUserDaata(state);
  }
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(id)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserModule)
