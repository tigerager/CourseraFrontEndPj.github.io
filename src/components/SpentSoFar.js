import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const SpentSoFar = () => {
    const { currency, total } = useContext(AppContext);
    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {currency}{total}</span>
        </div>
    );
};
export default SpentSoFar;