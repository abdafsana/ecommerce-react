import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../cartSlice';

function Cart() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
   
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems?.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className='shoppingCart'>
          {cartItems?.map(item => (
            
            <li key={item.id} className="cart-item"> {/* item.key veya item.productId gibi bir alan adı kullanın */}
              <div>
                <img src={item.thumbnail} alt={item.title} /> {/* item.image kullanın */}
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
