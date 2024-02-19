import { useState } from "react"
import { Link } from "react-router-dom"
import Background from "./Background"
import Buddy from "./Buddy"
import Back from "./Back"


export default function Login(){
    // const navigate=useNavigate();
    const[logindetails,setLogindetails]=useState({
        email:'',
        password:''
    })
    const[message,setMessage]=useState({
        type:'',
        text:''
    })
    function formhandle(event){
        // console.log(event.target.value);
        setLogindetails((prevdetails)=>{
            return{...prevdetails,[event.target.name]:event.target.value}
        })
    }
    function submit(event){
        event.preventDefault();
        // console.log(logindetails)
       fetch("http://localhost:8000/login",{
        method:"POST",
        body:JSON.stringify(logindetails),
        headers:{
            "Content-Type":"application/json"
        }
       })
       .then((response)=>{
        
        console.log(response); 
        if(response.status==404){
            setMessage({type:"error",text:"email is wrong"})

        }
        else if(response.status==403){
            setMessage({type:"error",text:"incorrect password"})
        }
        else if(response.status==201){
            setLogindetails({
                email:'',
                password:''
            })
            return response.json()
        }
        setTimeout(()=>{
            setMessage({type:"invisible",text:"dummy"})

        },5000)

       
    })
       .then((data)=>{
        console.log(data)
        if(data.Token!==undefined){
            console.log(data);
            localStorage.setItem('ecommerce',JSON.stringify(data));
            // navigate('/category')
        }
        else{
            navigate('/login');
        }
       
       })
       .catch((err)=>{
        console.log(err);
       })
    }
    return(
        <>
        <Buddy></Buddy>
        {/* <Background></Background> */}
        <Back></Back>
        <div className="login">
            <div className="forms">
                <div className="form-text">
                </div>
                <form className="form-inp" onSubmit={submit}>
                    <input className="inp" type="email" onChange={formhandle} name="email" placeholder="Enter ur email" required value={logindetails.email} />
                    <input className="inp" type="password"onChange={formhandle} name="password" placeholder="Enter password" required value={logindetails.password} />
                    <button className="btm" >Login</button>
                    <p className="regs">Don't have account?<Link to={'/Signup'} className="link-reg">Register here</Link></p>
                    <p className={message.type}>{message.text}</p>
                </form>
            </div>
        </div>
       </>

    )
}