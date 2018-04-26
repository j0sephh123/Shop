import React from 'react';
import Header from '../layout/header/header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AllForms from './AllForms';

const admin = (props) => {
  
  return (
    <div className='admin'>
      <Header />
      <div>Links
        <ul>
          <li>
            <Link to={`${props.match.url}/addNewCategory`}>AddNewCategory</Link>
          </li>
          <li>
            <Link to={`${props.match.url}/addNewItem`}>AddNewItem</Link>
          </li>
        </ul>
      </div>
      <Route path={`${props.match.url}/:allForms`} component={AllForms} />

    </div>
  );
}

export default admin;