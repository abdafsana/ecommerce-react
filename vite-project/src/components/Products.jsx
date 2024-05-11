import React from 'react';
import { useGetProductsQuery } from '../services/api'; 
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import "../../src/index.css"
import { Link } from "react-router-dom";

function ProductsList() {
  const { data, error, isLoading } = useGetProductsQuery(); 
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    console.log(product)
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>; 
  
  console.log(data)
  return (
    <div className='product-list'>
      <h1 className='product-title'>Products</h1>
      <ul className='list'>
        {data.products.map(product => (
          <li key={product.id} className='li'>
           <div className="card-item">
    <div className="card-item--body">
      <Link to={'/productDeatil/' + product.id}>
      <img className="card-img" src={product.thumbnail} alt={product.title} />
      </Link>
    </div>
    <div className="card-item--footer display__com">
    <i className="fa-solid fa-cart-shopping"></i>
    <p className="common-poppins card--cartIcon" onClick={() => handleAddToCart(product)}>Add To Cart</p>
    </div>
    <div className="card-item--minifooter">
      <p className="poppins-font500 card-title">{product.title.slice(0,20)}</p>
      <p className="poppins-font500 wishList-miniFoot">${product.price}<span className="wishList-miniFoot--subtitle">%{product.discountPercentage}</span></p>
    </div>              
  </div>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
