import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface TheApp {
  name: string,
  baseUrl: string,
}

interface HeaderProps {
  theApp: TheApp;
}

const MainHeader = styled.div`
  max-width: 900px;
  margin: 20px auto 20px;
`;

const HeaderBrand = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 20px;
`;

const Link = styled.a`
  color: #495963;
`;

const Header: FunctionComponent<HeaderProps> = ({theApp}: HeaderProps) => {
  return (
    <MainHeader>
      <HeaderBrand>
        <Link href={theApp.baseUrl}>{theApp.name}</Link>
      </HeaderBrand>
    </MainHeader>
  );
}

export default React.memo(Header);
