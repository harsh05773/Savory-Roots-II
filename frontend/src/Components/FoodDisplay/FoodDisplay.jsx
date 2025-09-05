import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodList from '../FoodList/FoodList';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you.</h2>
            <div className="food-display-list">
                {food_list.filter(item => category === "All" || category === item.category).map((item, index) => {
                    return <FoodList key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description}/>
                })}
            </div>
        </div>
    )
}

export default FoodDisplay