import React from 'react';

const Navbar = ({onRouteChange}) => {
  return (
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
      <p onClick={() => onRouteChange('signin')}
      className='f3 link dim white underline pa3 pointer'>Sign out</p>
    </nav>
  );
}

export default Navbar;