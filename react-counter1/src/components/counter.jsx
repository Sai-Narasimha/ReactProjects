import { useState} from 'react'

const Counter = function(){
    const [count, setCounter] = useState(0);
    const add = function(val){
        setCounter(count+val)
        
    }
    const sub = function(val){
        
        setCounter(count-val)
    }
    const double = function(val){
        
       
        setCounter(count*val)
    }
    
    // const sub = function(val)
    return (
        <div className="counter">
            
            <h3 className={count%2==0 ? "red":"green"}> <span className="white">Count :</span> {count}</h3>
            <button onClick={()=> add(1)}>+</button>
            <button onClick={()=>sub(1)}>-</button>
            <button onClick={()=>double(2)}>Double</button>
        </div>
    )
}
export {Counter}