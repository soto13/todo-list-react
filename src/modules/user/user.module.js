import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserDaata } from '../../actions';

class UserModule extends Component {
  constructor(props) {
    super(props);
    this.state = { firstname: '', lastname: '', phone: '',  inputfirstname: '', inputlastname: '', inputphone: '' };
  }

  lenghtToGetText(text) {
    if (text.length > 3) return true;
    return false;
  }

  setFirstName(event) {
    const firstname = event.target.value;
    return (this.lenghtToGetText(firstname)) ? this.setState({ firstname, inputfirstname: event.target }) : null;
  }

  setLastName(event) {
    const lastname = event.target.value;
    return (this.lenghtToGetText(lastname)) ? this.setState({ lastname, inputlastname: event.target }) : null;

  }

  setPhone(event) {
    const phone = event.target.value;
    return (this.lenghtToGetText(phone)) ? this.setState({ phone, inputphone: event.target }) : null;
  }

  addUser() {
    const { firstname, lastname, phone, inputfirstname, inputlastname, inputphone } = this.state;

    if (firstname && lastname && phone) {
      try {
        this.props.setUserDaata({ firstname, lastname, phone, isVisible: false });
        inputfirstname.value = inputlastname.value = inputphone.value = '';
        return this.setState({ firstname: '',  lastname: '',  phone: '', isVisible: false, inputfirstname: '' });
      } catch (e) {
        return console.log('error', e);
      }
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

const mapStateToProps = (state) => setUserDaata(state);

const mapDispatchToProps = (dispatch) => {
  return {
    setUserDaata: (user) => {
      dispatch(setUserDaata(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserModule)
