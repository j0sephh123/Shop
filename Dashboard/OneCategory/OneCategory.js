import React, {Component} from 'react'

import {
  // removeCategory,
  // updateCategory
} from '../../redux/actions';

// const OneCategory = ({
//   name, 
//   removeCategoryFn, 
//   updateCategoryFn, 
//   showEditFormFn, 
//   showEditForm, 
//   onChangeHandler,
//   editName
// }) => {
class OneCategory extends Component {
  
  state = {
    showEditForm: false,
    editName: '',
  }

  showEditFormFn = () => {
    this.setState(() => {
      return {
        showEditForm: !this.state.showEditForm
      }
    });
  } // show the input field when clicking the edit button

  onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(() => {
      return {
        [name] : value
      }
    });

  } // change input

  render(){
    return (
      <div className='container mx-auto w-75'>
        <li className='list-group-item d-flex justify-content-between align-items-center m-2'>
          {this.props.name}
          <span className="badge badge-pill">
            <button className='btn' onClick={() => this.showEditFormFn()}><i className="fas fa-edit"></i></button>
              {this.state.showEditForm ?
                <div>
                  <input 
                    className='form-control'
                    type='text'
                    name='editName'
                    onChange={this.onChangeHandler}
                    value={this.state.editName}
                  />
                  <button className='btn btn-primary' onClick={() => this.props.updateCategoryFn(this.props.name, this.state.editName)}>Update name</button> 
                </div>
              : null}
            <button className='btn' onClick={() => this.props.removeCategoryFn(this.props.name)}><i className="fas fa-window-close"></i></button>          
          </span>          
        </li>
      </div>
    );
  }
}

export default OneCategory;