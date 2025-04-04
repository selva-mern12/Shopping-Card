import Products from './components/Products';
import PriceTracker from './components/PriceTracker';
import Cart from './components/Cart'
import './App.css';
import { useEffect, useState } from 'react';

const products = [
  { id: 1, name: "Laptop", price: 500 },
  { id: 2, name: "Smartphone", price: 300 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Smartwatch", price: 150 },
];

const freeGift = { id: 99, name: "Wireless Mouse", price: 0 };
const threshold = 1000;

const App = () =>{
  const [cart, setCart] = useState([]);
  const [total,setTotal] = useState(0);

  const updateCart = (product,action) => {
    setCart(prevCart => {
      const updateCart = prevCart.find(item => item.id === product.id)
       ? prevCart
            .map(cart => cart.id === product.id ? 
            {...cart, quantity: action === 'decrease' ? cart.quantity - 1 : cart.quantity + 1} : cart)
            .filter(item => item.quantity > 0) : [...prevCart, {...product, quantity: 1}]
      const newTotal = updateCart.reduce((sum, item)=> sum + item.quantity * item.price, 0);
      setTotal(newTotal);
      return updateCart;
    });
  };

  useEffect(() => {
    setCart(prevCart => {
      const hasGift = prevCart.some(item => item.id === freeGift.id);
      if(total >= threshold  && !hasGift){
        return [...prevCart, {...freeGift, quantity: 1}]
      }
      if(total < threshold && hasGift) {
        return prevCart.filter(item => item.id !== freeGift.id)
      }
      return prevCart
    })
  },[total]);

  return(
    <div className='shopping-cart-bg'>
      <div className='shopping-cart'>
        <h1>Shopping Cart</h1>
        <Products products={products} updateCart={updateCart} />
        <PriceTracker total={total} threshold={threshold} />
        <Cart cartList={cart} updateCart={updateCart} />
      </div>
    </div>
  );
};
export default App;
