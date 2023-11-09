import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
import "./MiddleText.scss"; 
import { useForm, ValidationError } from '@formspree/react';

const Newsletter = () => {
    const [state, handleSubmit] = useForm("xknlolaw");

    if (state.succeeded) {
        return <p className="middle-message">Thank you for subscribing!</p>;
    }

    return (

        <div id="news-letter" className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">Sign up for latest updates and offers</span>

                <form onSubmit={handleSubmit} className="form">
                    <input className="input-field" type="email" name="email" placeholder="Email Address" />
                    <ValidationError className="validation-error" prefix="Email" field="email" errors={state.errors} />
                    <button className="subscribe-button" type="submit" disabled={state.submitting}>
                        Subscribe
                    </button>
                </form>
                <div className="text">Will be used in accordance with our Privacy Policy</div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
