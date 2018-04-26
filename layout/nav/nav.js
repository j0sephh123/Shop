import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const nav = (props) => {
  return (
    <nav>
      <div><Link to='/products'>Products</Link></div>
      <div><Link to='/admin'>Admin</Link></div>
      <div><Link to='/cart'>Cart {props.cartCount}</Link></div>  
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    cartCount: state.cart.count
  }
}

export default connect(mapStateToProps, null)(nav);