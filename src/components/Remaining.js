import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = (props) => {
    const { currency, remaining } = useContext(AppContext);
    return (
        <div className='col-sm'>
        <div className='alert alert-success'>
            <span>Remaining: {currency}<span id='remaining'>{remaining}</span></span>
        </div>
        </div>
    );
};
export default Remaining;