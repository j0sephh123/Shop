import React from 'react';
import ModifyProduct from '../Dashboard/ModifyProduct';
import ModifyCategory from '../Dashboard/ModifyCategory';
import {Route, Switch} from 'react-router-dom';

const AllForms = () => {
  return (
    <Switch>
      <Route exact path='/admin/modifyProduct' component={ModifyProduct}></Route>
      <Route exact path='/admin/modifyCategory' component={ModifyCategory}></Route>
    </Switch>
  )
}

export default AllForms;