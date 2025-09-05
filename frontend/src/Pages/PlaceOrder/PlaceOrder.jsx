import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const { cartItem, addToCart, removeFromCart, getSubtotal } = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-field">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Full Address' />
        <input type="text" placeholder='Phone no.' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{getSubtotal()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery and Handling charges</p>
            <p>₹{getSubtotal()===0?0:48}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>₹{getSubtotal()===0?0:getSubtotal() + 48}</b>
          </div>
          <button>Make Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder