import React, {Component} from 'react';
import { connect } from 'react-redux';
import OneProduct from './oneProduct/oneProduct';

class Products extends Component {
  
  render(){

    let allProductsMap = Object.entries(this.props.allProducts).map(([k, v], index, array) => {
      v.map((item, i, a) => a[i]['category'] = k);
      return v;
    }).reduce( (tot, cur, i) => [...tot, ...cur] );
  
    if(this.props.filter === 'showAll'){
      
    } else {
      allProductsMap = allProductsMap.filter(i => i.category === this.props.filter);
    }

    const oneProductMap = allProductsMap.map((product, index, array) => {
      return (
        <OneProduct 
          key={product.id}
          id={product.id}
          name={product.name}
          quantity={product.quantity}
          category={product.category}
          price={product.price}
        />
      );
    });
    return ( <React.Fragment>{oneProductMap}</React.Fragment> );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts : state.products,
    filter: state.visibilityReducer
  }
}



export default connect(mapStateToProps, null)(Products);