import React, {Component} from 'react'

import {
  // removeCategory,
  // updateCategory
} from '../../redux/actions';

class OneCategory extends Component {

  render(){
    return (
      <div className='container border border-success mx-auto w-75'>
        <li className='list-group-item'>{this.props.name}</li>
      </div>
    );
  }
  
}

export default OneCategory;