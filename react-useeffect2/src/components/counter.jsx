import {userState, useEffect} from "react";
export const Counter = ()=>{
    const[count, setCounter] = useState(10);

    useEffect(()=>{
        setInterval(()=>{
            setCounter((prevValue)=>{
                return prevValue -1
            })
        },400)
    },[])
    return (
        <div>
            <h3>count : {count}</h3>
        </div>
    )
}
