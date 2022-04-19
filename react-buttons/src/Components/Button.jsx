
import styled from "styled-components"
const Button = styled.button`
    border : ${(prop)=>{ 
        if(prop.type === "primary")return "1px solid black"
        else if(prop.type === "dashed") return "1px dashed black"
        else return "none"
        
    }};
    background-color :${(prop)=>{if(prop.type === "dashed")return "yellow" 
    else if(prop.type === "primary") return "blue"
    else return "white"
    }};
    color : ${(prop)=>{return (prop.type === "link")?"blue":"black"}};
    margin-right :20px;
    font-size :19px;
    border-radius : 5px;
    padding : 8px;


    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    
`
export {Button}