import './index.css';

const PriceTracker = ({total, threshold}) => {
    const priceWidth = ((total / threshold) * 100).toFixed()

    return(
        <div>
            <h3 className='product-heading'>Cart Summary</h3>
            <div className='price-tracker-container'>
                <div className='price-details'>
                    <p>Subtotal:</p>
                    <p>₹{total}</p>
                </div>
                <hr color='#000'/>
                {
                    total >= threshold ? (
                        <p>You got a free Wireless Mouse!</p>
                    ) : (
                        <div className='price-moving-container'>
                            <b>Add ₹{threshold - total} more to get a FREE Wireless Mouse!</b>
                            <div className='price-moving-bg'>
                                <div className='price-moving' style={{width: `${Math.min(priceWidth, 100)}%`}}/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default PriceTracker;