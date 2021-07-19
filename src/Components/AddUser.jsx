import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

 const AddUser = () =>
 { 
    let history = useHistory();
     const[employee ,setEmployee] = useState({firstname:"",lastname:"",email:""});
     const {firstname , lastname , email} = employee;

     const onInputChange = e =>{
         setEmployee( {...employee,[ e.target.name]:e.target.value})
     };

     const onSubmit = async(e) =>{
        e.preventDefault();
        await axios.post("http://127.0.0.1:3003/employees", employee);
        history.push("/listemployee");

     } ;


     return(
         <>
        
        <div className="container" style={{ textAlign:"left", fontWeight:"bold",color:"white"}}>
        <div className="w-75 shadow p-5" style={{background:"#ca8a96",marginLeft:"8rem",height:"28rem",marginTop:"35px"}}>
        <h2 >Add Employee</h2>
        <hr />
        <form onSubmit={ e => onSubmit(e)}>
  <div class="form-group">
    <label  class="form-label">First Name</label>
    <input type="text"
           class="form-control from-control-lg" 
           placeholder=" Enter Firstname"
           name="firstname" value={firstname}    
           onChange={e => onInputChange(e)}
           required />
   
  </div>
  <div class="form-group mt-2">
    <label  class="form-label">Lastname</label>
    <input type="text" 
           class="form-control from-control-lg"
           placeholder="Enter Lastname"
           name="lastname" value={lastname}
           onChange={e => onInputChange(e)}
           required />
  </div>

  <div class="form-group mt-2">
    <label  class="form-label ">Email</label>
    <input type="email" 
           class="form-control" 
           placeholder="Enter Email"
           name="email" value={email} 
           onChange={e => onInputChange(e)}    
           required />
  </div>

 
  
  
  <button type="submit" class="btn btn-primary m-4 ">Submit</button>
</form>
</div>
</div>
</>
     );
 }
 export default AddUser;