import React, { useContext } from 'react';
import { Container } from '../../styled-common';
import { FooterLayout, FooterCopyRight } from './styled';
import { getCurrentTimer } from '../../helpers';
import { AppContext } from '../../containers/main';

const Footer = () => {
  const { year } = getCurrentTimer();
  const { appName } = useContext(AppContext);

  return (
    <FooterLayout>
      <Container>
        <FooterCopyRight>
          {`Copyright © ${year} ${appName}.`}
        </FooterCopyRight>
      </Container>
    </FooterLayout>
  );
}

export default Footer;
