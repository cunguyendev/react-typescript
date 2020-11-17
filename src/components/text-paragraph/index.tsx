import React, { MouseEvent } from 'react';

const TextParagraph = () => {
  const ctaHandler = (event: MouseEvent) => {
    // tslint:disable-next-line: no-console
    console.log('You are clicked on the button!')
    event.preventDefault();
  }

  return (
    <div className="text-paragragh">
      <h2 className="text-paragragh__title">Lorem, ipsum dolor.</h2>
      <p className="text-paragragh__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum dolorum ipsam est non tempore, unde ducimus modi iusto molestias?</p>
      <div className="text-paragragh__cta">
        <a onClick={ctaHandler} href="/" className="button">About us</a>
      </div>
    </div>
  );
}

export default TextParagraph;
