import { useState, useEffect} from "react"

export const Timer = ({start, stop}) => {
    const [counter,setCounter] = useState(+start);

    useEffect(() =>{
        const timer = setInterval(() =>{
            setCounter((p)=>{
                if(p === +stop){
                    clearInterval(timer);
                    return p
                }
                else return p+1
            })
        },1000)
        return ()=>{
      
            console.log("clean up is working")
            clearInterval(timer)
        }
        
    },[]);
    return <h3>counter : {counter}</h3>
}
