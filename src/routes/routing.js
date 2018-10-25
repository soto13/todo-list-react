import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
// import { Route } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import HomeModule from '../modules/home/home.module';
import UserModule from '../modules/user/user.module';
import store from '../store';


const AppRouter = () => (
  <Provider store={store}>
    <main>
      <Switch>
        <Route path='/' exact component={HomeModule} />
        <Route path='/home' component={ HomeModule } />
        <Route path='/user' component={ UserModule } />
      </Switch>
    </main>
  </Provider>
)

/* const AppRouter = () => (
  <Provider store={store}>
    <Router >
      <Route path="/" exact component={ HomeModule } />
      <Route path="/" component={ UserModule } />
    </Router>
  </Provider>
) */

AppRouter.propTypes = {
  store: PropTypes.object.isRequired,
};

export default AppRouter;

