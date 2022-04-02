import React from 'react';
import './Cart.css'
const Cart = ({ cart, removeFromCart }) => {
    //conditional rendering options
    //1.element variable
    //2.ternary operator.condition ? true : false
    //3.&& operator (shorthand)
    //4.|| operator (shorthand)
    let command;
    if (cart.length === 0) {
        command = <p>Please add some items</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p><small>Thanks for adding items</small></p>
    }
    return (
        <div>
            <h3>Selected items: {cart.length}</h3>

            {
                cart.map(product => <p
                    key={product._id}
                >{product.name}
                    <button onClick={() => removeFromCart(product)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='blue'>Yay! you are buying!!</p>}
            {cart.length === 3 && <div className='blue'>
                <h3>Trigonal</h3>
                <p>Give it to three friends</p>
            </div>}
            {command}
            {/* {cart.length !== 4 ? <p>keep adding</p> : <button>Clear all</button>} */}
            {cart.length < 4 ? "" : <button>Clear all</button>}
            {cart.length === 4 && <button className='blue'>Review order</button>}
        </div>
    );
};

export default Cart;