import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = (props) => {
    const { currency } = useContext(AppContext);
    return (
        <div className='col-sm'>
        <div className='alert alert-success'>
            <span>Remaining: {currency}{props.id}</span>
        </div>
        </div>
    );
};
export default Remaining;