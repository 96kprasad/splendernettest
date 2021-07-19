import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';


const EditUser = () =>{

    let history = useHistory();
    const { id } = useParams();
        const[employee ,setEmployee] = useState({firstname:"",lastname:"",email:""});
     const {firstname , lastname , email} = employee;

     const onInputChange = e =>{
         setEmployee( {...employee,[ e.target.name]:e.target.value})
     };

     useEffect ( () => {
         loadEmployee();

     },[])
     const onSubmit = async(e) =>{
        e.preventDefault();
        await axios.put(`http://127.0.0.1:3003/employees/${id}`, employee);
        history.push("/listemployee");

     } ;

      const loadEmployee = async () =>{
          const result = await axios.get(`http://127.0.0.1:3003/employees/${id}`);
          setEmployee(result.data);
      }

     return(
         <>
        
        <div className="container">
        <div className="w-75 mx-auto shadow p-5" style={{background:"#f9fcc4", marginTop:"40px"}}>
        <h2>Upadate Employee Details</h2>
        <hr />
        <form onSubmit={ e => onSubmit(e)} style={{fontWeight:"bold"}}>
  <div className="form-group">
    <label  className="form-label">First Name</label>
    <input type="text"
           className="form-control from-control-lg" 
           placeholder=" Enter Firstname"
           name="firstname" value={firstname}    
           onChange={e => onInputChange(e)}
           required />
   
  </div>
  <div className="form-group mt-2">
    <label  className="form-label">Lastname</label>
    <input type="text" 
           className="form-control from-control-lg"
           placeholder="Enter Lastname"
           name="lastname" value={lastname}
           onChange={e => onInputChange(e)}
           required />
  </div>

  <div className="form-group mt-2">
    <label  className="form-label ">Email</label>
    <input type="email" 
           className="form-control" 
           placeholder="Enter Email"
           name="email" value={email} 
           onChange={e => onInputChange(e)}    
           required />
  </div>
  
  <button type="submit" className="btn btn-warning m-4 ">Update Employee</button>
</form>
</div>
</div>
</>
     );
}
export default EditUser;