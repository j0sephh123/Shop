import React, {Component} from 'react';
import { connect } from 'react-redux';
import OneProduct from './oneProduct/oneProduct';
import {increaseQuantity, decreaseQuantity} from '../../redux/actions';

class Products extends Component {
  
  render(){
    const allProductsMap = Object.entries(this.props.allProducts).map(([k, v], index, array) => {
      v.map((item, i, a) => a[i]['category'] = k);
      return v;
    }).reduce( (tot, cur, i) => [...tot, ...cur] );
  
    const oneProductMap = allProductsMap.map((product, index, array) => {
      return (
        <OneProduct 
          key={product.id}
          id={product.id}
          name={product.name}
          quantity={product.quantity}
          category={product.category}
          addFn={() => this.props.increaseAction(product.id, product.category)}
          subtractFn={() => this.props.decreaseAction(product.id, product.category)}
        />
      );
    });
    return ( <React.Fragment>{oneProductMap}</React.Fragment> );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts : state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseAction: (p, c) => dispatch(increaseQuantity(p, c)),
    decreaseAction: (p, c) => dispatch(decreaseQuantity(p, c))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);