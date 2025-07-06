import React from 'react';
import '../components/CSS/Product.css'; // Optional: style your products!

const products = [
  {
    name: 'Wall Calendar',
    features: '12 custom pages, A3 size, premium paper',
    price: '₹499',
    image: '/pdfs/WallCalender.jpg',
  },
  {
    name: 'Desk Calendar',
    features: 'Spiral-bound, A5 size, sturdy stand',
    price: '₹299',
    image: '/pdfs/DeskCalender.jpeg',
  },
  {
    name: 'Custom Calendar',
    features: 'Personalized images, special dates, branding',
    price: '₹599',
    image: '/pdfs/CustomCalender.png',
  },
];



const Products = () => {
  return (
    <div className="products">
      <h1>Our Calendar Products</h1>
      <p>
        Explore our exclusive range of calendars crafted to suit every need—personal, professional, or gifting!
      </p>
      <div className="product-list">
        {products.map((prod, idx) => (
          <div className="product-card" key={idx}>
            <img src={prod.image} alt={prod.name} className="product-img" />
            <h2>{prod.name}</h2>
            <p>{prod.features}</p>
            <div className="product-price">{prod.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
