import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ornaments }) => {
    return (
        <div>
            <h5>Me</h5>
            <p>House: {house}</p>
            <Special ornaments={ornaments}></Special>
        </div>
    );
};

export default Myself;