import React, { useContext } from 'react';
import { Container } from '../../styled-common';
import { HeaderLayout, HeaderLink, HeaderBrand } from './styled';
import { AppContext } from '../../containers/main';


const Header = () => {
  const { appName } = useContext(AppContext);

  return (
    <HeaderLayout>
      <Container>
        <HeaderBrand>
          <HeaderLink href="/">{appName}</HeaderLink>
        </HeaderBrand>
      </Container>
    </HeaderLayout>
  );
}

export default Header;
