import React from 'react';

const Brother = (props) => {
const {house} = props;
    return (
        <div>
            <h3>Brother</h3>
            <small>House: {house}</small>
            
        </div>
    );
};

export default Brother;