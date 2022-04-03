import React, { useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'
const GrandPa = () => {
    const [house, setHouse] = useState(1);
    const ornaments = 'Diamond ring';
    const buyHouse = () => {
        setHouse(house + 1);
    }
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <p>House: {house}</p>
            <button onClick={buyHouse}>Buy a house</button>
            <div style={{ display: 'flex' }}>
                <Father house={house} ornaments={ornaments}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>

        </div>
    );
};

export default GrandPa;