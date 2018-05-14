import React, {Component} from 'react';
import { connect } from 'react-redux';
import OneCartItem from './OneCartItem';
import ShowItem from './ShowItem';
import Modal from './Modal';
import OrderSummary from './orderSummary';

class Cart extends Component {
  state = {
    showModal: false
  }

  showModalFn = () => {
    this.setState(() => ({showModal: true}));    
  } // shows modal

  backdropClickHandler = () => {
    this.setState(() => ({showModal: false}));
  } // on backdrop click removes modal



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
        {this.state.showModal ? 
          <Modal 
          show={this.state.showModal}
          backdropClickHandler={this.backdropClickHandler}
            >
            <OrderSummary 
              price={this.props.cart.price}
              count={this.props.cart.count}
              products={this.props.cart.products}
            />
          </Modal>
        : null}                
        
        
        <div className='container'>
          <div className='row'>
            <div>
              <h5>Cart</h5>
              <p>Number of items per type: {this.props.cart.products.length}</p>
              <p>Total sum: ${this.props.cart.price}</p>
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
          <button 
            onClick={this.showModalFn}
            className='btn btn-primary btn-block'>Checkout</button>
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