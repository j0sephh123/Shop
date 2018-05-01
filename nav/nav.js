import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const styles = {
  nav: ['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light'],
  ul: ['navbar-nav', 'mr-auto'],
  li: 'nav-item',
  link: 'nav-link'
}

const nav = (props) => {
  return (
    <nav className={styles.nav.join(' ')}>
      <ul className={styles.ul.join(' ')}>
        <li className={styles.li}>
          <Link className={styles.link} to='/home'><i className="fas fa-home"></i></Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to='/products'>Products</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to='/admin'>Admin</Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} to='/cart'><i className="fas fa-shopping-cart"></i> {props.cart.count} || ${(props.cart.price).toFixed(2)}</Link>
        </li>
      </ul>
    </nav>
  );
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(nav);