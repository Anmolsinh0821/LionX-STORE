import React from 'react';
import { useSpring, animated } from 'react-spring';
import './T&C.scss';

const TermsAndConditionsPage = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <div className="terms-and-conditions">
      <div className="background"></div>
      <animated.div style={fadeIn} className="content">
        <h1 className="cool-header">Terms and Conditions</h1>
        <p>
          Welcome to LionX Store's Terms and Conditions page. Please read these terms carefully before using our website
          and services.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using LionX Store, you agree to be bound by these Terms and Conditions, our Privacy Policy,
          and any additional terms that may apply to specific features or services.
        </p>
        <h2>2. Use of Website</h2>
        <p>
          You may use LionX Store for personal, non-commercial purposes. You must not use our website for any unlawful
          or prohibited activities.
        </p>
        <h2>3. Products and Services</h2>
        <p>
          Our website offers a range of electronics products for sale. We strive to provide accurate product
          descriptions and prices, but errors may occur. We reserve the right to correct any errors or inaccuracies.
        </p>
        <h2>4. Intellectual Property</h2>
        <p>
          The content, design, and logos on LionX Store are protected by intellectual property rights. You may not
          reproduce, distribute, or use our content without written permission.
        </p>
        <h2>5. Limitation of Liability</h2>
        <p>
          LionX Store is provided on an "as-is" basis. We are not responsible for any damages or losses resulting from
          your use of our website or products.
        </p>
        <h2>6. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by the laws of your jurisdiction. Any disputes will be subject to the
          exclusive jurisdiction of the courts in your jurisdiction.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding our Terms and Conditions, please contact us at{' '}
          <a href="mailto:terms@lionxstore.com">terms@lionxstore.com</a>.
        </p>
        <p>Last Updated: August 1, 2023</p>
      </animated.div>
    </div>
  );
};

export default TermsAndConditionsPage;
