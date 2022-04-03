import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ({ ornaments }) => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h5>Special</h5>
            <p>Gift: {ornaments}</p>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house + 1)}>Buy a house</button>
        </div>
    );
};

export default Special;