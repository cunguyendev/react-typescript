import CONSTANTS from '../constants';
import { getPropertyFromObject } from './object';

/**
 * Get breakpoint and add styles
 * @param deviceType
 * @param styles
 */
export const getBreakpoint = (deviceType: string, styles: string) => {
  const breakpoint = getPropertyFromObject(deviceType.toLocaleUpperCase(), CONSTANTS.BREAKPOINT);

  return `
    @media (min-width: ${breakpoint}) {
      ${styles}
    }
  `;
}
