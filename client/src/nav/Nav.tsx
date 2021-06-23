import React from 'react';
import {Link} from 'react-router-dom';
import '../assests/stylesheets/nav/LandingNav.scss';

function Nav() {
  return (
    <span className='landing-nav'>
       <Link to='/'>Home</Link> | <Link to='/blog'>Blog</Link> | <Link to='/about'>About</Link>
    </span>
  )
};

export default Nav;