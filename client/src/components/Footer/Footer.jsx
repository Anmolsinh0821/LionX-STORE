import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();

    return( 
        <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">LionX Store is a premier e-commerce platform that offers a wide array of top-quality audio and smart wearable products. As a one-stop destination for tech enthusiasts and music lovers, LionX Store delivers an extensive range of products from renowned brands. With a strong commitment to customer satisfaction, the store provides a seamless shopping experience through a user-friendly interface, secure payment options, and timely delivery services. Experience sound and technology redefined with LionX Store's exceptional products and unparalleled service.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">Shantilal Shah Engineering College , Bhavnagar, 362250
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text"> +91 9228375858</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email:anmolsinh0821@gmail.com</div>
                </div>
            </div>
            <div className="col">
                <div className="title">Categories</div>
                <span className="text" onClick={() => navigate(`/category/1`)}>Headphones</span>
                <span className="text" onClick={() => navigate(`/category/4`)}>Smart Watches</span>
                <span className="text" onClick={() => navigate(`/category/3`)}>Bluetooth Speakers</span>
                <span className="text" onClick={() => navigate(`/category/2`)}>Wireless Earbuds</span>
                {/* <span className="text">Home Theatre</span>
                <span className="text">Projectors</span> */}
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text" onClick={() => navigate("/")}>Home</span>
                <span className="text" onClick={() => navigate("/About")}>About</span>
                <span className="text" onClick={() => navigate("/PrivacyPolicy")}>Privacy Policy</span>
                <span className="text" onClick={() => navigate("/T&C")}>Terms & Conditions</span>
                <span className="text" onClick={() => navigate("/ContactUs")}>Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    LionXSTORE 2023 CREATED BY ANMOLSINH , PREMIUM E-COMMERCE WEB-APP.
                </div>
                <img src={Payment} alt=""/>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
