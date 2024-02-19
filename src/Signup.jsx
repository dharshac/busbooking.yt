import { useState } from "react"
import { Link } from "react-router-dom"
import Background from "./Background"
import Back from "./Back"
export default function Signup(){
    const[details,setDetails]=useState({
        name:'',
        email:'',
        password:'',
        mobileNo:''
    })
    function inputhandle(event){
        // console.log(event.target.value)
        setDetails((prevdetails)=>{
            return{...prevdetails,[event.target.name]:event.target.value}
        })
    }
    function Submit(event){
        event.preventDefault();
        console.log(details);
        fetch("http://localhost:8000/register",{
            method:"POST",
            body:JSON.stringify(details),
        
            headers:{
                "Content-Type":"application/json"
            }
        
        })
        
       .then((response)=>response.json())
       .then((data)=>{
        console.log(data)
       })
      
       .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
        {/* <Background></Background> */}
        <Back></Back>

        <div className="form-input">
            <form className="form-text r" onSubmit={Submit}>
                <input className="inp"name="name" type="name"onChange={inputhandle} required placeholder="Enter ur name" value={details.name}/>
                <input className="inp" name="email"type="email"onChange={inputhandle} placeholder="Enter ur email" required value={details.email} />
                <input className="inp" name="password" type="password" onChange={inputhandle} placeholder="Enter ur password"required value={details.password}  />
                <input  className="inp" name="mobileNo"type="number"onChange={inputhandle} placeholder="Enter mobile number"required value={details.mobileNo}  />
                <button className="btm">Signup</button>
                <p className="reg">Already Signed ?<Link to={'/login'} className="link-log"> Login</Link></p>
            </form>

        </div>
        </>
       
    )
}