import React, { Component } from 'react';
// import Products from './products/products';
// import Header from '../layout/header/header';
import Main from '../layout/main/main';
import Aside from '../layout/aside/aside';

let selectAllProductNames;

class ProductsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    // 1 create ref
    this.myRef = React.createRef();
  }
  

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(() => {
      return {
        [name]: value
      }
    });
    this.searchFunction(selectAllProductNames, this.myRef.current.value);
  }


  searchFunction = (allProducts, refValue) => {
    allProducts.map((product, index, array) => {
      let parentEl = product.parentElement.parentElement;
      if(product.textContent.indexOf(refValue) > -1 ){
        parentEl.style.display='';
        return parentEl;
      } else {
        parentEl.style.display='none';
        return parentEl;
      }
    });
  }

  componentDidMount() {
    selectAllProductNames = Array.from(document.querySelectorAll('.productName'));
  }

  render() {
    return (
      <div className='products'><br /><br /><br />
        <div>
          <input 
            type='text' 
            name='value' 
            // onKeyDown={this.onKeyDown} 
            // 2. Add ref to dom element
            ref={this.myRef}
            onChange={this.onChange} value={this.state.value} />          
        </div><br /><br /><br />
        <Aside />
        <Main />
      </div>
    )
  }
}

export default ProductsContainer;