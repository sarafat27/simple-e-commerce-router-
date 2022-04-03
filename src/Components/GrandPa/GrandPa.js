import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './GrandPa.css'
/* context api steps:
1.call createContext with a default value
2.set a variable of the context with uppercase
3.Make sure you export the context to use it in other places
4.wrap your child content using contextName.provider
5.provide a value
6.to use the context in child component:
   a.use useContext hook and pass the context name as a value in the hook 
7.we can send array,function,variable,object everything through context API   
 */


export const RingContext = createContext('Ring')

const GrandPa = () => {
    const [house, setHouse] = useState(1);
    const ornaments = 'Diamond ring';
    const buyHouse = () => {
        setHouse(house + 1);
    }
    return (
        <RingContext.Provider value={[house, setHouse]}>
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
        </RingContext.Provider>
    );
};

export default GrandPa;