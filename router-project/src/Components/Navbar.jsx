import styled from "styled-components"
import {Link} from "react-router-dom"
export const Navbar = ({children}) =>{
    const links = [
        {title : "Mens Page", to : "/menspage"},
        {title : "Womens Page", to : "/womenspage"},
    ]
    return (
        <nav className="navbar" style = {{
            width: "100%",
            height: "40px",
            border : "1px solid black",
            display : "flex",
            gap : "5%",
            justifyContent : "center",
           
        }}>
            {links.map((ele,i) =>(
                <Link key = {i} to = {ele.to} >{ele.title}</Link>
                ))}
        </nav>
    )
}