import React from 'react';
import { TmpLayout, TmpImage } from './styled';
import placeholderImage from '../../assets/images/placeholder-image.png';

const Tmp = () => {
  return (
    <TmpLayout>
      <TmpImage src={placeholderImage} alt="Placeholder"/>
      <p>This is a content section</p>
    </TmpLayout>
  );
}

export default Tmp;
