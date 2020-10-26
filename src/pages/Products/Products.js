import React from 'react';
import { InfoSection } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour,homeObjFive, homeObjSix, homeObjSeven, homeObjEight  } from './Data';

function Products() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
       <InfoSection {...homeObjEight} />
      <InfoSection {...homeObjSeven} />
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjSix} />

    </>
  );
}

export default Products;
