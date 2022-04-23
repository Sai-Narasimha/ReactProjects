import {CartContext} from "../Contexts/cartContext"
import {useContext} from "react"

export const Navbar = ()=>{
    const {cartCount} = useContext(CartContext)
    return <>
            <nav style = {{
                    border : "1px solid black",
                    
                }}
                >
            cart : {cartCount}
        </nav>
    </>
}