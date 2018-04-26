import React from 'react';
import AddNewCategory from './form/AddNewCategory'
import AddNewItem from './form/AddNewItem'

const AllForms = (props) => {
  switch(props.match.url){
    case '/admin/addNewCategory':
      return(<AddNewCategory />);
    case '/admin/addNewItem':
      return(<AddNewItem />);
    default: return(<div>No Route Matched</div>);
  }
}
export default AllForms;