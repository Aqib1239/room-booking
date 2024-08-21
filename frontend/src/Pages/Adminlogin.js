import Header from "../Common/Header";
import Footer from "../Common/Footer";
import './Adminlogin.css';
import { useState } from "react";
import { useNavigate } from "react-router";

const Adminlogin = () => {
    let navigate = useNavigate();
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");
    let login = async () =>{
        try{
            let result = await fetch(`http://localhost:4500/adminlogin`,{
            method:'post',
            body: JSON.stringify({username,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if (result.username){
            localStorage.setItem('admin',JSON.stringify(result));
            navigate('/adminhome');
        }
        }catch{
            alert("Enter valid Username and Password");
        }
    }
    return (
        <div>
            <Header />
            <div className="row m-auto adminlogin-base">
                <div className="col-md-1"></div>
                <div className="col-md-5 adminlogin-main">
                    <h2 align="center">Admin Login</h2>
                        <input type="text" name="username" placeholder="Write Username"
                        onChange={(e)=>setUsername(e.target.value)} value={ username } required />
                        <input type="password" name="pswd" placeholder="Write Password"
                        onChange={(e)=>setPassword(e.target.value)} value={ password } required />
                        <button type="submit" onClick={login}>Login</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}


export default Adminlogin;