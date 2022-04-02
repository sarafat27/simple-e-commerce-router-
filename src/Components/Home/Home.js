import React from 'react';
import useTshirts from '../../Hooks/UseTshirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'
const Home = () => {
    const [tShirts, setTshirts] = useTshirts();
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tShirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                    ></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;