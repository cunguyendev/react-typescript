import React, { MouseEvent, useEffect, useState } from 'react';

const TextParagraph = () => {
  const [timenow, updateTimeNow] = useState(new Date());

  const tick = () => {
    updateTimeNow(new Date());
  };

  useEffect(() => {
    const timeData = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(timeData);
    };
  }, []);

  const ctaHandler = (event: MouseEvent) => {
    // tslint:disable-next-line: no-console
    console.log('You are clicked on the button!');
    event.preventDefault();
  };

  return (
    <div className="text-paragragh">
      <h2 className="text-paragragh__title">Lorem, ipsum dolor.</h2>
      <p className="text-paragragh__description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint earum
        dolorum ipsam est non tempore, unde ducimus modi iusto molestias?
      </p>
      <p className="time-now">Time now: {`${timenow.toLocaleString()}`}</p>
      <div className="text-paragragh__cta">
        <a onClick={ctaHandler} href="/" className="button">
          About us
        </a>
      </div>
    </div>
  );
};

export default React.memo(TextParagraph);
