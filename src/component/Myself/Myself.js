import React from 'react';

const Myself = (props) => {
    const {house} =props;
    return (
        <div>
            <h3>Myself</h3>
            <small>House: {house}</small>
        </div>
    );
};

export default Myself;