import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children})=>{
    const [cartCount, setCartCount] = useState(0)

    const handleChange = (inc)=>{
        setCartCount(cartCount + inc)
    }
    return <CartContext.Provider value = {{cartCount, handleChange}}>{children}</CartContext.Provider>
}