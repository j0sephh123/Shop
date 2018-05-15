import React, {Component} from 'react'
import {connect} from 'react-redux';
import {convertObjToArr} from '../helperFunctions/helper';

let counter = 1;

class ShowRoute extends Component {
  state = {
    showForm: false,
    value: '',
    authorName: '',
    posts: []

  }

  onSubmit = (e) => {
    e.preventDefault();

    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newdate = year + "/" + month + "/" + day;

    if(this.state.authorName.length > 3 || this.state.authorName.length < 15 || this.state.value.length.trim() > 3 || this.state.value.length.trim() < 255){
      this.setState(() => ({
        posts: [...this.state.posts, {id: counter++, date: newdate, author: this.state.authorName, text: this.state.value}]
      }));
    }

  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  onInputChange = (e) => {
    const data = e.target.name.trim();
    const value = e.target.value.trim();
    this.setState(() => ({[data] : value}))
  }

  render() {
    const renderNewPosts = this.state.posts.map(item => {
      return (
        <React.Fragment key={item.id}>
          <p>{item.text}</p>
          <small className="text-muted">Posted by {item.author} on {item.date}</small>
          <hr/>
      </React.Fragment>
      );
    }) 

    

    const id = Number(this.props.match.params.id);

    const item = this.props.allitems.filter(p => {
        return p.id === id
      })[0];

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
                <small className="text-muted">Posted by Anonymous on 2018/5/11</small>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim
                  aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente
                  laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint
                  natus.</p>
                <small className="text-muted">Posted by Anonymous on 2018/5/11</small>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim
                  aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente
                  laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint
                  natus.</p>
                <small className="text-muted">Posted by Anonymous on 2018/5/11</small>

                <hr/>
                {this.state.posts.length !== 0 ? renderNewPosts : null}
                <button
                  onClick={() => this.setState(() => ({
                  showForm: !this.state.showForm
                }))}
                  className="btn btn-success">Leave a Review</button>
                {this.state.showForm
                  ? <fieldset>

                      <form onSubmit={this.onSubmit} className='mt-5'>
                        <div className='form-group'>
                          <textarea
                            rows="4"
                            cols="50"
                            value={this.state.value}
                            onChange={this.handleChange}></textarea>
                        </div>
                        <div className='form-group'>
                          <input type='text' name='authorName' placeholder='Author name' onChange={this.onInputChange} value={this.state.authorName} />
                        </div>
                        <button className='btn btn-info'>Post</button>
                      </form>
                    </fieldset>

                  : null}

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    allitems: convertObjToArr(state.products)
  }
}

export default connect(mapStateToProps, null)(ShowRoute);