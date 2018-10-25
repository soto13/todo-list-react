import React, { Component } from 'react';
import FilterLinkComponent from '../filter-link/filter-link.component';

export class TopNavComponent extends Component {
  render() {
    return (
      <div>
        <FilterLinkComponent name='home' path='/' children='' />
        <FilterLinkComponent name='user' path='/user' children=''  />
      </div>
    )
  }
}

export default TopNavComponent
