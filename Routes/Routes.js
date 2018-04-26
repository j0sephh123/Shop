import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Cart from '../cart/cart';
import Admin from '../admin/admin';
import ProductsContainer from '../productsContainer/productsContainer';

const routes = () => {
  return (
    <Switch>
      <Route exact path='/products' component={ProductsContainer}></Route>
      <Route exact path='/cart' component={Cart}></Route>
      <Route path='/admin' component={Admin}></Route>
    </Switch>
  )
}

export default routes;