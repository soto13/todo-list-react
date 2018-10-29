import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export class FilterLinkComponent extends Component {
  render() {
    const  { name, path } = this.props;
    return (
      <NavLink to={ path }>{ name }</NavLink>
    )
  }
}

export default FilterLinkComponent
