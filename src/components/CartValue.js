import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from './Remaining';
const CartValue = () => {
    const { dispatch, currency } = useContext(AppContext);
    const valB = (num) => { 
        dispatch({
            type: 'ADD_REMAINING',
            payload: num,
        }
        );    

    }
    return (
        <div style={{ display: "flex" }} className='col-6'>
        <div style={{ display: "flex" }} className='col-sm'>
        <div style={{ height: "75.5%" }} className='alert alert-secondary'>
            <span>
                Budget: {currency}<input style={{ height: "100%" }} onChange={(num) =>valB(num.target.value)} id='budget' type='number'/>
            </span>
        </div>
        </div>
        <Remaining />
        </div>
    );
    

};
export default CartValue;