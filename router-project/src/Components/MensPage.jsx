import {useEffect,useState} from "react";
import axios from "axios";
export const MensPage = ()=>{
    const [menData,setMenData] = useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then(({data})=>{
            setMenData(data)
            console.log(data)
        })
    },[])
    return(
        <div style={{
            width: '100%',
            display: "grid",
            gridTemplateColumns : "repeat(4,1fr)",
            // gridTemplateRows : "200px",
            gridGap : "20px"
            
        }}>
            {menData.map((ele,i) =>(
                <div style= {{
                   border : "1px solid black" 
                }} key = {i} >
                        <img src= {ele.image} style= {{width : "100%", height : "250px"}}/>
                        <p>{ele.title}</p>
                    </div>
                ))}
        </div>
    )
}