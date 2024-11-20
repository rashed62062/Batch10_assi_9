import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const TopBrands = ({ brands }) => (
  <div>
    <h2>Top Brands</h2>
    <Marquee pauseOnHover={true}>
      {brands.map((brand) => (
        <Link key={brand.id} to={`/brand/${brand.id}`}>
          <img src={brand.logo} alt={brand.name} className="w-24 h-24 mr-4" />
        </Link>
      ))}
    </Marquee>
  </div>
);


export default TopBrands;