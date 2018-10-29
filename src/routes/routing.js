import React from 'react';
import { connect } from 'react-redux';
// import { Route } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TopNavComponent } from '../components';
import { HomeModule, UserModule } from '../modules';

const AppRouter = () => (
  <BrowserRouter>
    <main>
      <TopNavComponent />
      <Switch>
        <Route path='/' exact component={HomeModule} />
        <Route path='/home' component={ HomeModule } />
        <Route path='/user' component={ UserModule } />
      </Switch>
    </main>
  </BrowserRouter>
)

export default connect()(AppRouter);

