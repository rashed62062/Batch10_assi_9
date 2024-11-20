import Marquee from "react-fast-marquee";
import brandLogo1 from "../../../img/BookNestjpeg.jpeg";
import brandLogo2 from "../../../img/FreshMart.png";
import brandLogo3 from "../../../img/GlowBeauty.webp";
import brandLogo4 from "../../../img/HomeLux.png";
import brandLogo5 from "../../../img/StyleTrendz.png";
import brandLogo6 from "../../../img/tech-gear-png-image.png";
import { Link } from "react-router-dom";

const Slider = () => {
    return (
        <div className="py-4 flex  items-center">
            <Marquee pauseOnHover={true}  speed={20} className="space-x-10">
                <Link to="/login" className="mx-4">
                    <img src={brandLogo1} alt="BookNest logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4 gap-2">
                    <img src={brandLogo2} alt="FreshMart logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4">
                    <img src={brandLogo3} alt="GlowBeauty logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4">
                    <img src={brandLogo4} alt="HomeLux logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4">
                    <img src={brandLogo5} alt="StyleTrendz logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4">
                    <img src={brandLogo6} alt="TechGear logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4">
                    <img src={brandLogo1} alt="BookNest logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4 gap-2">
                    <img src={brandLogo2} alt="FreshMart logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4">
                    <img src={brandLogo3} alt="GlowBeauty logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4">
                    <img src={brandLogo4} alt="HomeLux logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4">
                    <img src={brandLogo5} alt="StyleTrendz logo" className="w-32 h-auto" />
                </Link>
                <Link to="/login" className="mx-4">
                    <img src={brandLogo6} alt="TechGear logo" className="w-32 h-auto" />
                </Link>
            </Marquee>
        </div>
    );
};

export default Slider;
