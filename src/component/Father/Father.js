import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const { house } = props;
    return (
        <div>
            <h2>Father</h2>
            <h4>House: {house} </h4>
            <div style={{ display: "flex" }}>
                <Sister house={house}></Sister>
                <Brother house={house}></Brother>
                <Myself house={house}></Myself>
            </div>
        </div>
    );
};

export default Father;