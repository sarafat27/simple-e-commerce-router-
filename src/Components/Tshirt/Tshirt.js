import React from 'react';
import './Tshirt.css'
const Tshirt = ({ addToCart, tshirt }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price: ${price}</p>
            <button onClick={() => addToCart(tshirt)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;