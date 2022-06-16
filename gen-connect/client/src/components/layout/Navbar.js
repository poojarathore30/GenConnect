import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import yg from './YG.png';
const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
    <li>
    <a href='https://genconnect-chat.herokuapp.com/' target="_blank"> 
    <i class="fa fa-lg fa-envelope-open" />Chat</a>
  </li>
      <li>
        <Link to='/profiles'>Community</Link>
      </li>
      <li>
        <Link to='/posts'>Feeds</Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user' />{' '}
          <span className='hide-sm'>Profile</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLinks = (
    <ul>
    <li>
    <Link to='/profiles'>Community</Link>
  </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
     
        <Link to='/'>
        <img src={yg}  className='logo-img'></img> 
        </Link>
      
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
