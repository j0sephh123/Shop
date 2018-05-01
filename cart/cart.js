import React, {Component} from 'react';
import { connect } from 'react-redux';
import OneCartItem from './OneCartItem';
import ShowItem from './ShowItem';

class Cart extends Component {

  render(){

    const allCartProducts = this.props.cart.products;

    const showItem = allCartProducts.filter(cartItem => cartItem.id === this.props.cart.selected);

    const renderShowItem = showItem.map(item => {
      return (
        <ShowItem key={item.id} characteristics={item} />
      );
    });
    
    
    const allCartProductsMap = allCartProducts.map((p, i, arr) => {
      return (
        <OneCartItem
          all={p}
          key={p.id}
          id={p.id}
          name={p.name}
          quantity={p.quantity}
        />
      );
    });

    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div>
              <h5>Cart</h5>
              <p>Number of items: {this.props.cart.products.length}</p>
            </div>
          </div>
          <div className='row'>
            <ul className='list-group col-lg-4 col-md-4'>
              {allCartProductsMap}
            </ul>
            <div className='col-lg-8 col-md-8'>
              {renderShowItem}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(Cart);