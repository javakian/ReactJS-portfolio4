import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree } from './Data';

function Services() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <Pricing />
    </>
  );
}

export default Services;
