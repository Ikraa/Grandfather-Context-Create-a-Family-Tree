import React, { useContext } from 'react';
import {RingContext} from '../../App';



const Special = () => {
    // const {ornaments} = props;
    const ornaments = useContext(RingContext);
    
    
    return (
        <div>
            <h2>Special</h2>
            <h3>Ornaments: {ornaments}</h3>
            
        </div>
    );
};

export default Special;