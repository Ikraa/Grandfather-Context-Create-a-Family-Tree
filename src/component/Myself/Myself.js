import React from 'react';
import Special from '../Special/Special';

const Myself = (props) => {
    const {house} =props;
    return (
        <div>
            <h3>Myself</h3>
            <small>House: {house}</small>
            <Special></Special>
        </div>
    );
};

export default Myself;