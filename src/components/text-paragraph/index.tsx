import React from 'react';

const TextParagraph = () => {
  const ctaHandler = () => {
    // tslint:disable-next-line: no-console
    console.log('hello mnab')
  }

  return (
    <div className="text-paragragh">
      <h2 className="text-paragragh__title">Lorem, ipsum dolor.</h2>
      <p className="text-paragragh__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum dolorum ipsam est non tempore, unde ducimus modi iusto molestias?</p>
      <div className="text-paragragh__cta">
        <a onClick={(e) => {
          ctaHandler();
          e.preventDefault();
        }} href="/" className="button">About us</a>
      </div>
    </div>
  );
}

export default TextParagraph;
