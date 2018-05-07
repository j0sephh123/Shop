import React, {Component} from 'react'
import {connect} from 'react-redux';
import {convertObjToArr} from '../helperFunctions/helper';


class Statistics extends Component {
  state = {
    switchName: true,
    switchCategory: true,
    switchQuantity: true,
    switchPrice: true
  }

  filterFn = (filter) => {
    console.log('filterFn');
    switch (filter) {
      case 'orderByPriceDesc':
        return (this.props.items.sort((a, b) => {
          return parseFloat(a.price) < parseFloat(b.price);
        }));
      case 'orderByPriceAsc':
        return (this.props.items.sort((a, b) => {
          return parseFloat(a.price) > parseFloat(b.price);
        }));
      case 'orderByQuantityAsc':
        return (this.props.items.sort((a, b) => {
          return parseFloat(a.quantity) > parseFloat(b.quantity);
        }));
      case 'orderByQuantityDesc':
        return (this.props.items.sort((a, b) => {
          return parseFloat(a.quantity) < parseFloat(b.quantity);
        }));
      case 'orderByNameAsc':
        return (this.props.items.sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) 
            return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) 
            return 1;
          return 0;
        }));
      case 'orderByNameDesc':
        return (this.props.items.sort(function (a, b) {
          if (a.name.toLowerCase() > b.name.toLowerCase()) 
            return -1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) 
            return 1;
          return 0;
        }));
      case 'orderByCategoryAsc':
        return (this.props.items.sort(function (a, b) {
          if (a.category.toLowerCase() < b.category.toLowerCase()) 
            return -1;
          if (a.category.toLowerCase() > b.category.toLowerCase()) 
            return 1;
          return 0;
        }));
      case 'orderByCategoryDesc':
        return (this.props.items.sort(function (a, b) {
          if (a.category.toLowerCase() > b.category.toLowerCase()) 
            return -1;
          if (a.category.toLowerCase() < b.category.toLowerCase()) 
            return 1;
          return 0;
        }));
      default:
        return this.props.items;
    }
  }

  btnOnClick = (filt) => {

    if(filt === 'orderByNameDesc'){
      if(!this.state.switchName){
        filt = 'orderByNameAsc';
      }
      let items = this.filterFn(filt);
      this.setState(() => {
        return {
          switchName: !this.state.switchName
        }
      });
      return items;
    }
    if(filt === 'orderByCategoryDesc'){
      if(!this.state.switchCategory){
        filt = 'orderByCategoryAsc';
      }
      let items = this.filterFn(filt);
      this.setState(() => {
        return {
          switchCategory: !this.state.switchCategory
        }
      });
      return items;
    }
    if(filt === 'orderByQuantityDesc'){
      if(!this.state.switchQuantity){
        filt = 'orderByQuantityAsc';
      }
      let items = this.filterFn(filt);
      this.setState(() => {
        return {
          switchQuantity: !this.state.switchQuantity
        }
      });
      return items;
    }
    if(filt === 'orderByPriceDesc'){
      if(!this.state.switchPrice){
        filt = 'orderByPriceAsc';
      }
      let items = this.filterFn(filt);
      this.setState(() => {
        return {
          switchPrice: !this.state.switchPrice
        }
      });
      return items;
    }

  }

  render() {
    console.log('render');
      
    const renderTable = this.props.items.map((item, index, array) => { 
        if (index % 2 === 0) {
        return ( <tr className="table-primary" key={item.id}>
          <th scope="row">{item.name}</th>
          <td>{item.category}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
            </tr>);
        } return ( <tr className="table-light" key={item.id}>
          <th scope="row">{item.name}</th>
          <td>{item.category}</td>
          <td>{item.quantity}</td>
          <td>{item.price}</td>
            </tr>)
        });
    
    return ( 
    <React.Fragment>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">  
              <button
                onClick={() => this.btnOnClick('orderByNameDesc')}
                className='btn btn-primary'>Name</button></th>
            <th scope="col">
              <button 
                onClick={() => this.btnOnClick('orderByCategoryDesc')}
                className='btn btn-success'>Category</button></th>
            <th scope="col"><button 
                onClick={() => this.btnOnClick('orderByQuantityDesc')}
                className='btn btn-warning'>Quantity</button></th>
            <th scope="col"><button 
                onClick={() => this.btnOnClick('orderByPriceDesc')}
                className='btn btn-info'>Price</button></th>
          </tr>
        </thead>
        <tbody>
          {renderTable}
        </tbody>
      </table>
    </React.Fragment>
    );
  }
}

const mapStateToProps = state => { 
  return { 
    items: convertObjToArr(state.products)
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);