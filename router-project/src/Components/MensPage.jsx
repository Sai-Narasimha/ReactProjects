import {useEffect,useState} from "react";
import axios from "axios";
export const MensPage = ()=>{
    const [menData,setMenData] = useState([])
    useEffect(()=>{
       getData()
    },[])
    const getData = ()=>{
        axios.get("http://localhost:3004/mens").then(({data})=>{
            setMenData(data)
            console.log(data)
        })
    }
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
                        <img src= {ele.img} style= {{width : "100%", height : "250px"}}/>
                        <p>{ele.name}</p>
                        <p>Price : {ele.saleprice}</p>
                    </div>
                ))}
        </div>
    )
}