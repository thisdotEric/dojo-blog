import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1>THE DOJO BLOG</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a
          href='/create'
          style={{
            color: 'white',
            backgroundColor: 'black',
            borderRadius: '8px',
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
