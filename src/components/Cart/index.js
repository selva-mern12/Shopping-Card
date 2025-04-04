import './index.css';

const Cart = ({cartList, updateCart}) => {
    return (
        <div className='cart-container'>
            {cartList.length !== 0 && <h3 className='product-heading'>Cart Items</h3>}
            {
                cartList.length === 0 ? (
                    <div className='emptycard-view'>
                        <h6 className='emptycard-head'>Your cart is empty</h6>
                        <p className='emptycard-para'>Add some products to see them here!</p>
                    </div>
                ) : (
                    <ul className='cart-list'>
                        {[...cartList.filter(item => item.id !== 99), ...cartList.filter(item => item.id === 99)].map(cartItem => 
                            <li key={cartItem.id} className='cart-details'>
                                <div className='cart-product'>
                                    <h6 className='cart-product-name'>{cartItem.name}</h6>
                                    <p className='cart-product-prices'>
                                        ₹{cartItem.price} x {cartItem.quantity} = ₹{cartItem.price * cartItem.quantity}
                                    </p>
                                </div>
                                {
                                    cartItem.id === 99 ? 
                                       <p className='free-gift'>FREE GIFT</p> :
                                       <div className='inc-dec-buttons-container'>
                                            <button
                                                type='button'
                                                className='decrease-button'
                                                onClick={() => updateCart(cartItem, 'decrease')}
                                                >-</button>
                                            <p className='product-quantity'>{cartItem.quantity}</p>
                                            <button 
                                                type='button' 
                                                className='increase-button'
                                                onClick={() => updateCart(cartItem, 'increase')}>+</button>
                                        </div>
                                }
                            </li>
                        )}
                    </ul>
                )
            }
        </div>
    );
};

export default Cart;