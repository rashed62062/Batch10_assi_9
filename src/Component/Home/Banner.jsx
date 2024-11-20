import banner from '../../../img/4685339.jpg';
import App from '../CouponList/All/App';
import Coupons from '../CouponList/Coupons';
import Slider from './Slider';

const Banner = () => {
    return (
        <div className="text-center">
            <img
                src={banner}
                alt="Banner"
                className="w-full h-auto object-cover"
            />
            <h1 className="font-bold mt-4 text-3xl">Top Product</h1>
            <Slider />

            <Coupons></Coupons>
           
            {/* <App></App> */}

        </div>
    );
};

export default Banner;
