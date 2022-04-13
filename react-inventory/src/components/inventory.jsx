import { useState} from 'react'
const Inventory = function (){
    const [inv, setInv] = useState({
        books:10

        
        
    
    });

    // const handleAdd = (i)=>{
    //     setInv(inv.bookss + 1)
    //   }
    return (
        <div className="inventory">
            <h2>Books : {inv.books}</h2>
            {console.log(inv.books)}
            <button onClick = {()=>setInv(inv.books+1)}>+</button>
        </div>
    )
}

export {Inventory}