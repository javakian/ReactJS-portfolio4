import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Full Stack Website Development</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$ 499.99</PricingCardCost>
                <PricingCardLength>per month development</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Four Weeks, Five Pages</PricingCardFeature>
                  <PricingCardFeature>Website and Signup Database</PricingCardFeature>
                  <PricingCardFeature>Document Literature</PricingCardFeature>
                  <PricingCardFeature>Plus Hosting Fees</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>$ 999.99</PricingCardCost>
                <PricingCardLength>per month development</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Four Weeks, Fifteen Pages</PricingCardFeature>
                  <PricingCardFeature>Website and Signup Database</PricingCardFeature>
                  <PricingCardFeature>Document Literature</PricingCardFeature>
                  <PricingCardFeature>Plus Hosting Fees</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$2,499.99</PricingCardCost>
                <PricingCardLength>per month development</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>eCommerce Website</PricingCardFeature>
                  <PricingCardFeature>Fifty items, Five pages</PricingCardFeature>
                  <PricingCardFeature>Stripe or PayPal Transactor</PricingCardFeature>
                  <PricingCardFeature>Plus Hosting Fees</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
