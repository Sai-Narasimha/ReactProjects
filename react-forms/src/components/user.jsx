import { useEffect, useState } from "react";
import axios from "axios"
import "./App.css";

export const Users = () => {
const [formData, setFormData] = useState([])

  useEffect(()=>{
    getData();
  },[])
  const getData =()=>{

    // const [houses, setForms] = useState({})
    axios.get("http://localhost:4300/users",formData).then((res)=>{
      setFormData(res.data)
      console.log(res.data)

    })


  }

  return (
    <div>
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            {/* <th>Marital Status</th> */}
            <th>Salary</th>
          
          </tr>
        </thead>
        <tbody>
          {formData.map((user, index) => {
            console.log("formData",formData)
            return (
              <tr key = {user.id} className="userDetails">
                <td>{user.id}</td>
                <td>{user.username} </td>
                <td >{user.age}</td>
                <td>{user.address}</td>
                <td>{user.department}</td>
                <td>{user.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};