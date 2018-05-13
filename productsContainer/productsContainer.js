import React, { Component } from 'react';
import Categories from './categories/categories';
import Products from '../productsContainer/products/products';

let selectAllProductNames;

class ProductsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
    this.myRef = React.createRef();
  }
  
  onChange = (e) => {
    console.log('onchange');
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
    console.log(this.state.value);
    return (
      <div>
        {/* <div className="form-group w-50 mx-auto m-3">
          <input 
            className='form-control' 
            placeholder='Search'
            type="text" 
            name='value'
            ref={this.myRef}
            onChange={this.onChange}
            value={this.state.value}
            />
        </div> */}
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-3'>
              <Categories />
            </div>

            <div className='col-lg-9 col-md-9 row'>
              <Products />
            </div>
          </div>
        </div>                    
      </div>        
    );
  }
}

export default ProductsContainer;