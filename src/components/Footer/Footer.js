import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Button } from '../../globalStyles';
import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';
import { render } from '@testing-library/react';
 /*


https://codesandbox.io/s/crimson-water-0hxke?file=/src/App.js


function Footer() {
   return (
    
       <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join my membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='Your Email' />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>

            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink href="http://www.msn.com">Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
            <FooterLink to='/'>Destinations</FooterLink>
            <FooterLink to='/'>Sponsorships</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/'>Submit Video</FooterLink>
            <FooterLink to='/'>Ambassadors</FooterLink>
            <FooterLink to='/'>Agency</FooterLink>
            <FooterLink to='/'>Influencer</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>
            <FooterLink to='/'>Twitter</FooterLink>
          </FooterLinkItems>

        </FooterLinksWrapper>
          <WebsiteRights>Optical Automation, LLC © 2020, All rights reserved.</WebsiteRights>

      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            James L. Avakian
          </SocialLogo>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/www.instagram.com/javakian' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
*/
function CardItem(props) {
  return (
    <>
      <li className="cards_item">
        <a
          href={props.path}
          className="cards_item_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="cards_item_pic-wrap" data-category={props.label}>
            <img
              className="cards_item_img"
              alt="Portfolio Pictures"
              src={props.src}
              path={props.path}
            />
          </figure>
          <div className="cards_item_info">
            <h5 className="cards_item_text">{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}
export default function Footer() {
  return (
    <div className="Footer">
      <CardItem
        src="444.png"
        text="Magic App"
        label="iOs"
        path="https://bigassmessage.com/"
      /> 
    </div>
  );
}