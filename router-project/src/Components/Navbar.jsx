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

                <img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="" style = {{width:"25px",marginTop:"5px",height:"25px"}}/>
        </nav>
    )
}