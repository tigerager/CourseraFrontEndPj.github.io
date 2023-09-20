import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaMinusCircle } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteItem = () => {
        const item = {
            name: props.name,
        };
        dispatch({
            type: 'DELETE_ITEM',
            payload: item,
        });
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.quantity}</td>
        <td><FaPlusCircle size='2.2em' color="limegreen" onClick={handleDeleteItem}></FaPlusCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaMinusCircle></td>
        <td><FaTimes size='2.2em'  onClick={handleDeleteItem}></FaTimes></td>
        </tr>
    );
};
export default ExpenseItem;