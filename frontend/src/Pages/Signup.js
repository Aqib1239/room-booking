import './Signup.css';
import { useState } from 'react';
import Header from '../Common/Header';
import { useNavigate } from 'react-router';


const Signup = () =>{
    let navigate = useNavigate();
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [contact,setContact] = useState("");
    let [gender,setGender] = useState("");
    let [password,setPassword] = useState("");
    let [address,setAddress] = useState("");

    let register = async (e) =>{
        e.preventDefault();
        console.log(name,email,contact,gender,password,address);
        let result = await fetch(`https://room-booking-api-umber.vercel.app/signup`,{
            method:'post',
            body: JSON.stringify({name,email,contact,gender,password,address}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if (result){
            alert("Signup Successfull");
            navigate('/login');
        }else{
            alert("Something went wrong...");
        }
    }

    return(
        <>
        <Header />
        <form onSubmit={ register }>
        <div className='row justify-content-center signup-main'>
            <div className='col-md-6 signup-body'>
                <h1 align="center">User Registration</h1>
                <input type="text" placeholder='Enter your full Name' className='signup-input' 
                onChange={(e)=>setName(e.target.value)} value={name} required />
                <input type="email" placeholder='Enter your Email' className='signup-input'
                onChange={(e)=>setEmail(e.target.value)} value={email} required />
                <input type="number" placeholder='Enter your Contact' className='signup-input signup-contact'
                onChange={(e)=>setContact(e.target.value)} value={contact} required />
                <select className='signup-input' onChange={(e)=>setGender(e.target.value)} value={gender} required>
                    <option hidden selected>Select your Gender</option>
                    <option value="Male">Male</option>
                    <option value="FeMale">FeMale</option>
                </select> 
                <input type="password" placeholder='Enter your Password' className='signup-input'
                onChange={(e)=>setPassword(e.target.value)} value={password} required />
                <input type="text" placeholder='Enter your Address' className='signup-input'
                onChange={(e)=>setAddress(e.target.value)} value={address} required />
                <button className='signup-button' type='submit'>Signup</button>
            </div>
        </div>
        </form>
        </>
    );
}

export default Signup;
