import TopBrands from './TopBrands';
import BrandsOnSale from './BrandsOnSale';

const HomePage = ({ brands }) => (
  <div>
    <TopBrands brands={brands} />
    <BrandsOnSale brands={brands} />
  </div>
);

export default HomePage;
