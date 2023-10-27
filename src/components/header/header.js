import React from 'react';
import {Link} from 'react-router-dom';


import './styled.scss';
const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>first</Link>
      <Link to='/two'>second</Link>
      <Link to='/three'>third</Link>
    </div>
  )
}

export default Header;
