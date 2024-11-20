const BrandsOnSale = ({ brands = [] }) => (
    <div>
      <h2>Brands on Sale</h2>
      {brands.filter(brand => brand.isSaleOn).length === 0 ? (
        <p>No brands are currently on sale.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {brands.filter(brand => brand.isSaleOn).map((brand) => (
            <div key={brand.id} className="border rounded-lg p-4 text-center">
              <img src={brand.logo} alt={brand.name} className="w-20 h-20 mx-auto mb-2" />
              <h3 className="text-xl font-semibold">{brand.name}</h3>
              <p>Total Coupons: {brand.totalCoupons}</p>
              <p>Category: {brand.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  
  export default BrandsOnSale;
  