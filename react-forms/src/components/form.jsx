import {UseState} from "react"

const Form = function (){
    const [formData,SetFormData] =useState({
        username : "",
        age : ""
    });
    const hadleChange = (e) => {
        const {id, value} = e.target;

        setFormData({
            ...formData,
            [id] : value,
        });
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    retrun(
        <form onSubmit={handleSubmit}>
            <input
            onChange={handleChange}
            type="text"
            paceholder="Enter Name"
            id = "name"
            >
            
            </input>
            
        </form>
    )
}
export {Form}