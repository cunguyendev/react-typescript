import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__brand"><a href="/">CodeLab</a></h1>
      <div className="nav">
        <ul className="nav__items">
          <li className="nav__items__item nav__items__item--active">
            <a href="/">Home</a>
          </li>
          <li className="nav__items__item ">
            <a href="/about/">About</a>
          </li>
          <li className="nav__items__item ">
            <a href="/projects/">Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
