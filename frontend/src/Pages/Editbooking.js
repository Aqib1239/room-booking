import './Editroom.css';
import Adminheader from '../Common/Adminheader';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Editbooking = () =>{
    let navigate = useNavigate();
    let params = useParams();
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [contact,setContact] = useState("");
    let [rno,setRno] = useState("");
    let [price,setPrice] = useState("");
    let [duration,setDuration] = useState("");
    let [type,setType] = useState("");
    let [bookingdate,setBookingdate] = useState("");
    let [status,setStatus] = useState("");

    useEffect(()=>{
        editBooking();
    },[]);
    let editBooking = async () =>{
        let result = await fetch(`http://localhost:4500/editbooking/${params.id}`);
        result = await result.json();
        setName(result.name);
        setEmail(result.email);
        setContact(result.contact);
        setRno(result.roomno);
        setPrice(result.price);
        setDuration(result.duration);
        setType(result.type);
        setBookingdate(result.bookingdate);
        setStatus(result.status);
        
    }


    let updatebooking =async () =>{
        let result = await fetch(`http://localhost:4500/updatebooking/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ name,email,contact,rno,price,duration,type,bookingdate,status }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        navigate('/viewbooking');
        if (result) {
            alert("Status Updated Successfull");
        }
    }


    return(
        <div>
            <Adminheader />
            <div className='row m-auto justify-content-center editroom-base'>
                <div className='col-md-5 editroom-main'>
                <input type='text' className='editroom-input'
                    onChange={(e)=> setName(e.target.value)} value={ name } readOnly />
                    <input type='text' className='editroom-input'
                    onChange={(e)=> setEmail(e.target.value)} value={ email } readOnly />
                    <input type='text' className='editroom-input'
                    onChange={(e)=> setContact(e.target.value)} value={ contact } readOnly />
                    <input type='text' className='editroom-input'
                    onChange={(e)=> setRno(e.target.value)} value={ rno } readOnly />
                    <input type='number' className='editroom-input'
                    onChange={(e)=> setPrice(e.target.value)} value={ price } readOnly />
                    <input type='text' className='editroom-input'
                    onChange={(e)=> setDuration(e.target.value)} value={ duration } readOnly />
                    <input type='text' className='editroom-input'
                    onChange={(e)=> setType(e.target.value)} value={ type } readOnly />
                    <input type='date' className='editroom-input'
                    onChange={(e)=> setBookingdate(e.target.value)} value={ bookingdate } readOnly />

                    <label>Current Status - {status}</label>
                    <select className="editroom-input" onChange={(e)=>setStatus(e.target.value)} value={status}>
                        <option value="Pending">Pending</option>  
                        <option value="Confirm">Confirm</option>  
                        <option value="Canceled">Cancel</option>  
                    </select>
                    <button onClick={ updatebooking } className='btn btn-primary'>Update Status</button>
                </div>
            </div>
        </div>
    );
}

export default Editbooking;