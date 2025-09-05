import React, { useContext, useState } from 'react'
import './FoodList.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodList = ({ id, name, image, price, description}) => {
    const {cartItem, addToCart, removeFromCart}= useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className="food-item-img">
                <img src={image} alt="" />
                {
                    !cartItem[id] ? <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" /> :
                        <div className='add-remove'>
                            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItem[id]}</p>
                            <img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="name-rate">
                    <h3>{name}</h3>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p>{description}</p>
                <h3>${price}</h3>
            </div>
        </div>
    )
}

export default FoodList