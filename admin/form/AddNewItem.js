import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItemToCategory} from '../../redux/actions';

class AddNewItem extends Component {
  state = {
    category: '',
    item: ''
  }

  onChangeHandler = (e) => {
    const name = e.target.name
    const data = e.target.value;
    this.setState(() => {
      return {
        [name] : data
      }
    });
  } // for input updating state

  addItemToCategoryHandler = () => {
    this.props.addItemToCategory(this.state.category, this.state.item, 1);
  }

  render(){

    const categoriesOptions = this.props.categories.map(c => {
      return (
        <option key={c} value={c}>{c}</option>
      );
    });

    return (
      <div>
        <fieldset>
          <legend>Add Item To Category</legend>

            <select 
              name='category'
              value={this.state.category} 
              onChange={this.onChangeHandler}>
              {categoriesOptions}
            </select>


            <input 
              type='text'
              name='item'
              onChange={this.onChangeHandler}
              value={this.state.item}
            />

            <button onClick={this.addItemToCategoryHandler}>Add Item To Category</button> <br />
            <span>Category: {this.state.category}</span> <br />
            <span>Item: {this.state.item}</span>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: Object.keys(state.products)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCategory: (category, item, quantity) => dispatch(addItemToCategory(category, item, quantity)),
    // removeCategoryDispatch: (input) => dispatch(removeCategory(input)),
    // updateCategoryDispatch: (selectedCategory, newCategoryName) => dispatch(updateCategory(selectedCategory, newCategoryName)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewItem);













