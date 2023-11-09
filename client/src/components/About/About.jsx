import React from 'react';
import { useSpring, animated } from 'react-spring';
import './About.scss';

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  return (
    <div className="about-us">
      <div className="background"></div>
      <animated.div style={fadeIn} className="content">
        <h1 className="cool-header">About LionX Store</h1>
        <p>
          Welcome to LionX Store, your ultimate destination for premium audio and smart wearable products! We take pride in
          offering a diverse range of high-quality earphones, Bluetooth speakers, headphones, and smartwatches to elevate
          your audio and tech experiences.
        </p>
        <p>
          At LionX Store, we believe in delivering top-notch customer satisfaction through a carefully curated selection of
          products from renowned brands. Whether you're an audiophile seeking crystal-clear sound, a fitness enthusiast
          looking for the latest smartwatches, or a tech-savvy individual in need of cutting-edge gadgets, we've got you
          covered.
        </p>
        <p>
          Explore our collection of earphones that boast superior sound clarity, noise cancellation features, and ergonomic
          designs for prolonged comfort. Our Bluetooth speakers deliver powerful and immersive audio, perfect for both
          indoor and outdoor gatherings.
        </p>
        <p>
          Indulge in the world of headphones, where you can find options ranging from on-ear to over-ear, wireless to wired,
          to suit your preferences. Additionally, discover our smartwatch lineup that combines functionality and style,
          offering features like fitness tracking, heart rate monitoring, and compatibility with your smartphone.
        </p>
        <p>
          At LionX Store, we strive to ensure a seamless shopping experience. Our user-friendly interface allows you to
          navigate through products effortlessly, find detailed specifications, and read authentic customer reviews. Our
          dedicated customer support team is always ready to assist you with any queries or concerns.
        </p>
        <p>
          Shop with confidence, knowing that we offer secure payment options and timely delivery, so your desired products
          reach you swiftly and safely.
        </p>
        <p>
          Join us on our journey to elevate your audio and tech experiences. Unleash the roar of exceptional sound and
          innovation with LionX Store!
        </p>
      </animated.div>
    </div>
  );
};

export default About;
