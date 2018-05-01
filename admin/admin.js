import React from 'react';
import { Route, Link } from "react-router-dom";
import AllForms from './AllForms';

const admin = (props) => {
  
  return (
    <div>
      <div className='container-fluid'>
        <ul className='nav nav-pills'>
          <li className='nav-item'>
            <Link className='nav-link' to={`${props.match.url}/modifyProduct`}>Modify Product</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to={`${props.match.url}/modifyCategory`}>Modify Category</Link>
          </li>
        </ul>
      </div>
      <Route path={`${props.match.url}/:allForms`} component={AllForms} />

    </div>
  );
}

export default admin;