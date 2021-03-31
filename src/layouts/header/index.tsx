import React, { FunctionComponent } from 'react';

interface Navigation {
  url: string;
  text: string;
  active?: boolean;
}

interface TheApp {
  name: string;
  baseUrl: string;
}

interface HeaderProps {
  navigationData: Navigation[];
  theApp: TheApp;
}

const Header: FunctionComponent<HeaderProps> = ({
  navigationData,
  theApp,
}: HeaderProps) => {
  return (
    <div className="header">
      <h1 className="header__brand">
        <a href={theApp.baseUrl}>{theApp.name}</a>
      </h1>
      <div className="nav">
        <ul className="nav__items">
          {navigationData.map((navigation) => {
            return (
              <li
                key={navigation.text}
                className={`nav__items__item ${
                  navigation.active && 'nav__items__item--active'
                }`}
              >
                <a href={navigation.url}>{navigation.text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
