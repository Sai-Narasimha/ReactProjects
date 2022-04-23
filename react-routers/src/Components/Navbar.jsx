
import {Link} from "react-router-dom"
export const Navbar = ()=>{
    const nav = [
        {title : "Home" , to : "/home"},
        {title : "About", to :"/about"},
        {title : "Users", to : "/users"}
    ]
    return (
        <div>
            {nav.map((el,i) =>(
                <Link key={i} to={el.to} style={{margin : "10px"}}>{el.title}</Link>
                
            ))}
        </div>
    )
}