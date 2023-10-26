import React from 'react';

const Cart = ({service}) => {
    const {img, title, price} = service;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default Cart;