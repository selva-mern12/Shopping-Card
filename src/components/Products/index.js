import './index.css';

const Products = ({products, updateCart}) => {
    return (
        <div className='product-container'>
            <h2 className='product-heading'>Products</h2>
            <ul className='product-list'>
                {products.map(product => 
                    <li key={product.id} className='products'>
                        <h3 className='product-name'>{product.name}</h3>
                        <p className='product-price'>₹{product.price}</p>
                        <button 
                            type="button" 
                            className='addcart-button'
                            onClick={() => updateCart(product)}
                        >Add to Cart</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Products;