import React, { useState } from 'react';
import useTshirts from '../../Hooks/UseTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const [tShirts, setTshirts] = useTshirts();
    const [cart, setCart] = useState([])

    const addToCart = selectedItem => {
        const exist = cart.find(tshirt => tshirt._id === selectedItem._id);
        if (!exist) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('item already added')
        }

    }

    const removeFromCart = selectedItem => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        setCart(rest)
    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tShirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        addToCart={addToCart}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    removeFromCart={removeFromCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;