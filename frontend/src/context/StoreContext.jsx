import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets"

const StoreContext = createContext(null);

export { StoreContext };

const StoreContextProvider = (props) => {
    const [cartItem, setCartItem] = useState({});
    function addToCart(itemId) {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }
    function removeFromCart(itemId) {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
    const getSubtotal = () => {
        var subtotal = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                subtotal += food_list.find((product) => product._id === item).price * cartItem[item];
            }
        }
        return subtotal;
    }
    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getSubtotal
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;