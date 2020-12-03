import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../../App';

const ActionButton = styled.button`
  background-color: #eb277d;
  border-radius: 3px;
  color: #fff;
  display: inline-block;
  padding: 13.33333px 20px;
  text-decoration: none;
  border: none;
  margin-top: 20px;
  font-family: "Google Sans Display", Arial, Helvetica, sans-serif;
`;

const Wrapper = () => {
  const { authenticated, action } = useContext(AppContext);

  return (
    <div className="wrapper">
      <p>Your login status: {authenticated ? 'true' : 'false'}</p>
      <ActionButton onClick={() => {
        if (action) {
          action(!authenticated);
        }
      }}>{authenticated ? 'Logout' : 'Login now'}</ActionButton>
    </div>
  );
}

export default React.memo(Wrapper);