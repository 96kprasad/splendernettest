import React , { useState , useEffect} from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";
{/*import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';*/}

 const ListUser = () =>
 {
    
     const[employees,setEmployee]=useState([]);
     const[selectAll, setSelectAll]=useState(false);
     
     
     useEffect(() => {
         
        loadempoyee();
             
         }
     , []);

     const loadempoyee = async() =>{
         const result =await axios.get("http://127.0.0.1:3003/employees");
         
         setEmployee(result.data.reverse())
     };

     const deleteEmployee = async id =>{
         await axios.delete(`http://127.0.0.1:3003/employees/${id}`);
       loadempoyee();
       {/*toast.warn('User deleted Sucessfuly!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }); */}
       
     };

     {/*const deleteAllEmployee = async id =>{
      let arrayid = [];
      selectAll.forEach( d => {
        if (d.select) {
          arrayid.push(d.id)
        }
        console.log(arrayid)
      });
      await axios.delete(`http://127.0.0.1:3003/employees/${id}`);
    loadempoyee();
    
  }; */}

     return(<>
        
        <div className="container">
        <div className="py-4">
        <div className="py-4">
        <h2>Employee List</h2>
        <input type="text" placeholder="Search Employee" />
        <Link class="btn btn-primary m-4" to="/addemployee">Create Employee</Link>
       <Link class="btn btn-danger m-2"  /* onClick={ () => deleteAllEmployee()} */>Delete All</Link>
        <hr />
        </div>
        <table class="table border shadow"  >
  <thead class="table-dark">
    <tr>
    <th>
    <div className="custom-control custom-checkbox">
            <input type="checkbox" 
                  id="selectAll" 
                  checked={selectAll}
                  className="custom-control-input" 
                  value={selectAll}
                  onClick={ ()=> setSelectAll(!selectAll)} />
            <label className="custome-control-label" htmlFor="selectAll"></label>
          </div>
    </th>
      <th scope="col">Id</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
      {
        employees.map((employee , index) =>( 
        <tr>
        <td >
          <div className="custom-control custom-checkbox">
            <input type="checkbox" checked={selectAll} className="custom-control-input" />
            <label className="custome-control-label"></label>
          </div>
        </td>
        <th scope="col">{index + 1}</th>
       <td> {employee.firstname} </td>
       <td> {employee.lastname} </td>
       <td> {employee.email} </td>
       <td> 
       <Link to={"/listemployee"} class="btn btn-danger" onClick={ () => deleteEmployee(employee.id)}>Delete</Link>
       <Link class="btn btn-outline-secondary m-2" to={`/editemployee/${employee.id}`}>Update</Link>
       <Link class="btn btn-primary m-2" to={`/view/${employee.id}`}>View</Link>
       </td>
       </tr>

     
        ))
      }
  </tbody>
</table>

        </div>
        </div>
           {/* <ToastContainer /> */}
        </>
     );
 }
 export default ListUser;