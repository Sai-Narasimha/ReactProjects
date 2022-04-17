import {useState, useEffect} from "react"
import axios from "axios";
export const Form = ()=>{
const [formData,setFormData] = useState({
    username : "",
    age : "",
    salary : "",
    address : "",
    department : "",
    maritalStatus : "",
});

const handleChange = (e)=>{
    setFormData({
        ...formData,
        [e.target.id]:e.target.value
    })
    // console.log(e.target.value)
}

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(formData)
    axios.post("http://localhost:4300/users", formData).then(()=>{
       
        alert("Success")
    })
    
}
    return (
        <form onSubmit={handleSubmit} className= "form">
            <label>Name</label>
            <input type="text" id = "username" onChange= { handleChange}/>


            <br/>

            <label>Age</label>
            <input type="number" id= "age" onChange= { handleChange}/>


            <br/>
            <label>salary</label>
            <input type="number" id="salary" onChange= { handleChange}/>


            <br/>

            <label>Address</label>
            <input type="text" id="address" onChange= { handleChange}/>


            <br/>

            <label>Department</label>
            <select id = "department" onChange={handleChange}>
                <option value="">Select</option>
                <option value="Management">Management</option>
                <option value="Production">Production</option>
                <option value="HumanResources">Human Resources</option>
            </select>


            <br/>

            <label>Marital Status  :</label>
            <label>Married</label>
            <input type="checkbox" value = "Married"/>
            <label>Unmarried</label>
            <input type="checkbox" value = "Unmarried"/>
            <br/>
            <input type= "submit" value="Submit"/>
        </form>
    )
}