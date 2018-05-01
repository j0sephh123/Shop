import React, {Component} from 'react';
import {connect} from 'react-redux';
import {convertObjToArr} from '../helperFunctions/helper';
import {quantityAction} from '../redux/actions';
import OneProduct from './OneProduct/OneProduct';

class ModifyProduct extends Component {
  
  render(){
    const allProducts = this.props.products.map(p => {
      return (
        <OneProduct key={p.id}
          product={p}
          showFormFn={this.showFormFn}
          name={p.name}
          quantity={p.quantity}
          quantityActionPlus={() => this.props.quantityAction(p.id, p.category, 'plus')}
          quantityActionMinus={() => this.props.quantityAction(p.id, p.category, 'minus')}
          price={p.price}
         />
      );
    });
    return (
      <div className='container'>
        <ul className='list-group list-group-flush'>
          {allProducts}
        </ul> 
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: convertObjToArr(state.products)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    quantityAction: (p, c, plusOrMinus) => dispatch(quantityAction(p, c, plusOrMinus)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModifyProduct);