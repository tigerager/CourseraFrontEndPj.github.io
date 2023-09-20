import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from './Remaining';
const CartValue = () => {
    const [budget, setBudget] =  useState(0);
    const { currency } = useContext(AppContext);
    const valB = num => { 
        setBudget(num.target.value);    
    }
    return (
        <div style={{ display: "flex" }} className='col-6'>
        <div style={{ display: "flex" }} className='col-sm'>
        <div style={{ height: "75.5%" }} className='alert alert-secondary'>
            <span>
                Budget: {currency}<input style={{ height: "100%" }} onChange={valB} id='budget' type='number'/>
            </span>
        </div>
        </div>
        <Remaining id={budget}/>
        </div>
    );
    

};
export default CartValue;