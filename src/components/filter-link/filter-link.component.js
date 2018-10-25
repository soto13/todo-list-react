import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class FilterLinkComponent extends Component {
  render() {
    const  { name, path } = this.props;
    return (
      <Link to={ path } >{ name }</Link>
    )
  }
}

export default FilterLinkComponent
