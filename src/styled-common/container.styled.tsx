import styled from 'styled-components';
import { getBreakpoint } from '../helpers';

export const Container = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  margin: 0 auto;

  ${getBreakpoint('sm', `
    max-width: 540px;
  `)}

  ${getBreakpoint('md', `
    max-width: 720px;
  `)}

  ${getBreakpoint('lg', `
    max-width: 960px;
  `)}

  ${getBreakpoint('xl', `
    max-width: 1140px;
  `)}
`;

export const ContainerFluid = styled.div`
  width: 100%;
  padding: 15px;
`;
