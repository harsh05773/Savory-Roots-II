import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets';

const Cart = () => {
  const { cartItem, addToCart, removeFromCart, getSubtotal } = useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div key={index} className='class-item-title cart-items-item'>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItem[item._id]}</p>
                <p>₹{item.price * cartItem[item._id]}</p>
                <p className='cross' onClick={() => addToCart(item._id)} >+</p>
                <p className='cross' onClick={() => removeFromCart(item._id)} >x</p>
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
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
            <b>₹{getSubtotal()===0?0:getSubtotal()+48}</b>
          </div>
        </div>
        <button onClick={()=>navigate('/order')}>Place Order</button>
      </div>
    </div>
  )
}

export default Cart