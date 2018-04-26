import React, {Component} from 'react';
import {connect} from 'react-redux';
import OneCategory from './oneCategory/oneCategory';

class Aside extends Component {
  
  render(){
    const allCategories = Object.keys(this.props.products).map(c => {
      return (
        <OneCategory 
          key={c}
          name={c}
        />
      );
    });

    return (
      <aside>
        {allCategories}
      </aside>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
  
}

export default connect(mapStateToProps, null)(Aside);