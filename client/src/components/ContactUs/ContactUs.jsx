import React from 'react';
import { useSpring, animated } from 'react-spring';
import './ContactUs.scss';

const ContactUs = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <div className="contact-us">
      <div className="background"></div>
      <animated.div style={fadeIn} className="content">
        <h1 className="cool-header">Contact Us</h1>
        <p>
          Have questions, feedback, or need assistance? Feel free to reach out to us using the contact information
          below.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <div className="icon">📞</div>
            <p>Call us at: <a href="tel:+91 9228375858">+91 9228375858</a></p>
          </div>
          <div className="contact-item">
            <div className="icon">📧</div>
            <p>Email us at: <a href="mailto:contact@lionxstore.com">lionstore@gmai.com</a></p>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default ContactUs;
