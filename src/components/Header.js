import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="top-nav">
      <div className="search-container">
        <h2 className="label">Links</h2>
        <div className="search">
          <div className="underline-search" />
          <span className="material-symbols-outlined search-icon">search</span>
        </div>
        <input type="text" />
      </div>
    </header>
  );
};

export default Header;
