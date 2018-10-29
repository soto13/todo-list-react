import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopNavComponent } from '../components';
import AppRouter from '../routes/routing';
import store from '../store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavComponent />
        <AppRouter store={ store } />
        {/* <HomeModule></HomeModule> */}
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object.isRequired,
}

export default connect()(App);
