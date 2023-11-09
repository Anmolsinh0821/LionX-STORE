import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './PaymentSuccessPage.scss';
import './AnimatedButton.scss';
import { useNavigate } from "react-router-dom";


const PaymentSuccessPage = () => {

  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const fadeAnimation = useSpring({ opacity: 1, from: { opacity: 0 } });

  useEffect(() => {
   
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timeout); // Clear the timeout on unmount
  }, []);

  return (
    <div className="payment-success-page">
      <animated.div style={fadeAnimation} className="success-content">
        {showText && (
          <>
            <h1>
              <span className="checkmark-symbol">&#10003;</span>
              <span className="payment-success-text">Payment Successfull</span>
            </h1>
            <p>Your payment has been successfully processed. Thank you for choosing LionX Store!</p>
            <p>
              We appreciate your business and look forward to serving you again. Should you have any
              questions, concerns, or need assistance, please don't hesitate to reach out to our
              friendly customer support team.
            </p>
            <p>
              Feel free to <a href="mailto:lionxstore082@gmail.com">contact us</a> at{' '}
              <a href="mailto:lionxstore0821@gmail.com">lionxstore@gmail.com</a> for any further
              assistance or inquiries. Your satisfaction is our top priority.
            </p>

            <div className="animated-button" onClick={() => navigate("/")}>
                Continue Shopping
            </div>
          </>
        )}
      </animated.div>
    </div>
  );
};

export default PaymentSuccessPage;
