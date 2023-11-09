import React from 'react';
import './PrivacyPolicy.scss';
import { useSpring, animated } from 'react-spring';


const PrivacyPolicy = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <div className="privacy-policy">
      <div className="background"></div>
      <animated.div style={fadeIn} className="content">
        <h1 className='cool-header'>Privacy Policy</h1>
        <p>
          Welcome to LionX Store's Privacy Policy page. We value your trust and are committed to protecting your
          personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use
          our website and services.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect your name, email address, billing and shipping information, and payment details when you make a
          purchase. We also gather data on your interactions with our website, such as browsing activity and products
          viewed.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use your information to process orders, provide customer support, and improve our services. Personalized
          product recommendations and marketing communications may also be sent based on your preferences.
        </p>
        <h2>Sharing of Your Information</h2>
        <p>
          We share your data with trusted partners for order fulfillment, payment processing, and website analytics.
          Rest assured, your information is only shared for the purpose of delivering a seamless shopping experience.
        </p>
        <h2>Your Choices</h2>
        <p>
          You have the right to access, update, or delete your personal information. You can also opt out of receiving
          marketing communications by adjusting your preferences in your account settings.
        </p>
        <h2>Security Measures</h2>
        <p>
          We implement industry-standard security measures to protect your data. However, no method of transmission
          over the internet is 100% secure. We strive to safeguard your information but cannot guarantee absolute
          security.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns regarding our Privacy Policy, please reach out to us at{' '}
          <a href="mailto:privacy@lionxstore.com">privacy@lionxstore.com</a>.
        </p>
        <p>Last Updated: August 1, 2023</p>
      </animated.div>
    </div>
  );
};

export default PrivacyPolicy;
