import {CartContext} from "../../Contexts/cartContext"
import {useContext} from "react"


export const Card =()=>{
    const {handleChange} = useContext(CartContext)
    return (
        <div
            style = {{
                width: "200px",
                height: "400px",
                border : "1px solid",
                
            }}
        >
            <button onClick={()=>handleChange(1)}>Add to cart</button>

        </div>
    )
}