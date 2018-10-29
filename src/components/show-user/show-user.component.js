import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserVisible } from '../../actions';

export class ShowUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { showData: false, divKey: '', user: {} }
  }

  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => {
      const { divKey, user } = this.state;
      this.forceUpdate();
      this.test = (
        <div key={ divKey } >
          <p>Apellido: { user.lastname }</p>
          <p>Teléfono: { user.phone }</p>
          <p>Es visible: { (user.isVisible) ? 'si' : 'no' }</p>
          <button onClick={ this.changeVisible.bind(this, user.id) } >cambiar</button>
        </div>
      )
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  showUsers() {
    const { user } = this.context.store.getState();

    return user.map((user, key) => {
      if (user.id !== null) return (
        <div key={ user.id } >
          <p>{ user.firstname }</p>
          { (this.state.showData) && (this.state.divKey === user.id)  && (this.test) }
          <button onClick={ this.showUser.bind(this, user, user.id) } >mostrar</button>
        </div>
      );
      return (<div key={ key } >No hay usuarios registrados</div>);
    })
  }

  showUser(user, key) {
    this.test = (
      <div key={ key } >
        <p>Apellido: { user.lastname }</p>
        <p>Teléfono: { user.phone }</p>
        <p>Es visible: { (user.isVisible) ? 'si' : 'no' }</p>
        <button onClick={ this.changeVisible.bind(this, user.id) } >cambiar</button>
      </div>
    )
    this.setState({
      showData: !this.state.showData,
      divKey: key,
      user
    })
    return 
  }

  changeVisible(id) {
    try {
      this.props.updateUserVisible(id);
      return;
    } catch (e) {
      return console.log(e, 'error');
    }
  }

  render() {

    return (
      <div>
        { this.showUsers() }
      </div>
    )
  }
}

ShowUserComponent.contextTypes = {
  store: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => updateUserVisible(state);

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserVisible: (id) => {
      dispatch(updateUserVisible(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowUserComponent)
