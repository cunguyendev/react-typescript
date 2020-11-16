import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__brand">
          <a href="/">Code Lab</a>
        </div>
        <ul className="footer__content__social social">
            <li className="social__item">
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/example/">Facebook</a>
            </li>
            <li className="social__item">
              <a target="_blank" rel="noreferrer" href="https://www.twitter.com/example/">Twitter</a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;