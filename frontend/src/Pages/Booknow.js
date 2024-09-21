import './Booknow.css';
import Userheader from '../Common/Userheader';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';

const Booknow = () =>{
    let navigate = useNavigate();
    let params = useParams();
    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [contact, setContact] = useState("");
    let [roomno, setRoomno] = useState("");
    let [price, setPrice] = useState("");
    let [duration, setDuration] = useState(1);
    let [type, setType] = useState("");
    let [bookingdate, setBookingdate] = useState("");
    let status = "Pending";
    let user = JSON.parse(localStorage.getItem('user'));

    let bookingdata = async () =>{
        let result = await fetch(`https://room-booking-api-umber.vercel.app/editroom/${params.id}`);
        result = await result.json();
        setRoomno(result.rno);
        setPrice(result.price);
        setType(result.type);
        setName(user.name);
        setEmail(user.email);
        setContact(user.contact);
    }
    useEffect(()=>{
        bookingdata();
    },[]);
    let bookroom = async (e) =>{
        e.preventDefault();
        price = price*duration;
        let result = await fetch(`https://room-booking-api-umber.vercel.app/booking`,{
            method:'post',
            body: JSON.stringify({name,email,contact,roomno,price,duration,type,bookingdate,status}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if (result){
            alert("Booking Request Send Successfull");
            navigate('/rooms');
        }
    }


    return(
        <div>
            <Userheader />
            <div className='row m-auto justify-content-center booknow-base'>
                <div className='col-sm-5 booknow-main'>
                    <h2>Book Room</h2>
                    <form onSubmit = { bookroom }>
                    <input type='text' className='booknow-input'
                    onChange={(e)=>setName(e.target.value)} value={name} required />
                    <input type='email' className='booknow-input'
                    onChange={(e)=>setEmail(e.target.value)} value={email} readOnly />
                    <input type='number' className='booknow-input'
                    onChange={(e)=>setContact(e.target.value)} value={contact} required />
                    <input type='text' className='booknow-input' readOnly
                    onChange={(e)=>setRoomno(e.target.value)} value={roomno} />
                    <input type='number' className='booknow-input' readOnly
                    onChange={(e)=>setPrice(e.target.value)} value={price} />
                    <select className='booknow-input' onChange={(e)=>setDuration(e.target.value)} value={duration} required>
                        <option value="1">1 Month</option>
                        <option value="3">3 Month</option>
                        <option value="6">6 Month</option>
                        <option value="12">1 Year</option>
                    </select>
                    <label>Booking Date : </label>
                    <input type='date' className='booknow-input'
                    onChange={(e)=>setBookingdate(e.target.value)} value={bookingdate} required />
                    <input type='text' className='booknow-input' readOnly
                    onChange={(e)=>setType(e.target.value)} value={type} />
                    <button className='btn btn-success btn-lg'>Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Booknow;
