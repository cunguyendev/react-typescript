import React, { FunctionComponent } from 'react';

interface Social {
  host: string;
  username: string;
  text: string;
}

interface TheApp {
  name: string;
  baseUrl: string;
}

interface FooterProps {
  socialData: Social[];
  theApp: TheApp;
}

const Footer: FunctionComponent<FooterProps> = ({
  socialData,
  theApp,
}: FooterProps) => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__brand">
          <a href={theApp.baseUrl}>{theApp.name}</a>
        </div>
        <ul className="footer__content__social social">
          {socialData.map((menu) => {
            return (
              <li key={menu.username} className="social__item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`${menu.host}${menu.username}`}
                >
                  {menu.text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
