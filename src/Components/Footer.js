
import React from 'react';
import './Footer.css';
import { Button } from './Button';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure Tour Company to Get Greater Deals and Happy Trips
        </p>
        <p className='footer-subscription-text'>
          Subscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <br>
      </br>
     
    </div>
  );
}

export default Footer;

