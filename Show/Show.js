import React, {Component} from 'react'
import {connect} from 'react-redux';
import {convertObjToArr} from '../helperFunctions/helper';

class ShowRoute extends Component {
  render() {
    const id = Number(this.props.match.params.id);
    console.log(typeof id);
    const item = this.props.allitems.filter(p => {return p.id === id})[0];
    console.log(item);
    return (
      <div className="container mt-5 mx-auto">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <div className="card mt-4">
              <img
                className="card-img-top img-fluid"
                src="http://placehold.it/900x400"
                alt=""/>
              <div className="card-body">
                <h3 className="card-title">{item.name}</h3>
                <h4>${item.price}</h4>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id
                  dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias
                  iure, ducimus!</p>
              </div>
            </div>
            <div className="card card-outline-secondary my-4">
              <div className="card-header">
                Product Reviews
              </div>
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim
                  aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente
                  laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint
                  natus.</p>
                <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim
                  aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente
                  laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint
                  natus.</p>
                <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim
                  aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente
                  laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint
                  natus.</p>
                <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                <hr/>
                <button className="btn btn-success">Leave a Review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )};
}

const mapStateToProps = state => {
  return {
    allitems: convertObjToArr(state.products)
  }
}

export default connect(mapStateToProps, null)(ShowRoute);