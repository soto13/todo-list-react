import React, { Component } from 'react';
import { TopNavComponent } from '../components';
import AppRouter from '../routes/routing';
import store from '../store';
// import HomeModule from './home/home.module';

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

export default App;
