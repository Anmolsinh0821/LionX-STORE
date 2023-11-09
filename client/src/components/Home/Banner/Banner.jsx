import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";


const Banner = () => {

    const navigate = useNavigate();

    return (<div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Don't miss out on these limited-time offers! Stock up on the latest audio gadgets and smart wearables while stocks last. Hurry, the clock is ticking. Shop Now & Experience the thrill of savings at LionX Store.</p>
                <div className="ctas">
                    <div className="banner-cta" onClick={() => navigate("/ReadMore")}>Read More</div>
                    <Link to="prod" spy={true} smooth={true} offset={-100} duration={500}><div className="banner-cta v2">Shop Now</div></Link>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>);
};

export default Banner;
