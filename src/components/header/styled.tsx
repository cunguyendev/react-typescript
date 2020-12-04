import styled from 'styled-components';
import CONSTANTS from '../../constants';
import { Link } from '../../styled-common';

export const HeaderLayout = styled.header`
  padding-top: 20px;
  background-color: ${CONSTANTS.COLOR.GRAY};
`;

export const HeaderBrand = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 20px;
`;

export const HeaderLink = styled(Link)`
  color: ${CONSTANTS.COLOR.WHITE};
`;
