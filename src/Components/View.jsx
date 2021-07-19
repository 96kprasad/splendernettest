import React, { useState , useEffect} from "react";
import axios from "axios";
import { Link ,useParams } from "react-router-dom";

const View = () =>{
const [employee ,setEmployee] = useState({ firstname:"",lastname:"",email:""});
const { id } = useParams();

useEffect(() => {
    loadempoyee();
    
}, []);

const loadempoyee = async() =>{
    const result =await axios.get(`http://127.0.0.1:3003/employees/${id}`);
    setEmployee(result.data)
};

    return (
        <>
        <div className="container mt-4 shadow p-8" style={{ marginLeft:"23rem ",width:"30rem",height:"20rem",background:"#4a7969",color:"white"}}>
        <h1 style={{fontSize:"2rem",paddingTop:"20px"}}>Employee Details</h1>
        <hr />
        <ul style={{listStyleType:"none",fontFamily:"monospace",fontSize:"1.5rem" }}>
            <b>
            <li>Firstname: {employee.firstname}</li>
            <li>Lastname: {employee.lastname}</li>
            <li>email: {employee.email}</li></b>
        </ul>

        <Link className="btn btn-primary" to="/listemployee" style={{marginTop:"40px",marginLeft:"18rem"}}>Back to Home</Link>

        </div>
        
        </>
    );
} 
export default View;