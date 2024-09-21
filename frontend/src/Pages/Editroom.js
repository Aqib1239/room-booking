import './Editroom.css';
import Adminheader from '../Common/Adminheader';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Editroom = () =>{
    let navigate = useNavigate();
    let params = useParams();
    let [rno,setRno] = useState("");
    let [price,setPrice] = useState("");
    let [image,setImage] = useState("");
    let [type,setType] = useState("");
    let [status,setStatus] = useState("");

    useEffect(()=>{
        editRoom();
    },[]);
    let editRoom = async () =>{
        let result = await fetch(`https://room-booking-api-umber.vercel.app/editroom/${params.id}`);
        result = await result.json();
        setRno(result.rno);
        setPrice(result.price);
        setType(result.type);
        setStatus(result.status);
        setImage(result.image);
    }

    let convert = (e) =>{
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () =>{
            setImage(reader.result);
        };
    }
    let updateroom =async () =>{
        let result = await fetch(`https://room-booking-api-umber.vercel.app/updateroom/${params.id}`, {
            method: 'put',
            corssDomain:true,
            body: JSON.stringify({ rno,price,image,type,status }),
            headers: {
                'Content-Type': 'application/json',
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
        });
        result = await result.json();
        navigate('/viewroom');
        if (result) {
            alert("Room Updated Successfull");
        }
    }


    return(
        <div>
            <Adminheader />
            <div className='row m-auto justify-content-center editroom-base'>
                <div className='col-md-5 editroom-main'>
                    <input type='text' className='editroom-input'
                    onChange={(e)=> setRno(e.target.value)} value={ rno } />
                    <input type='number' className='editroom-input'
                    onChange={(e)=> setPrice(e.target.value)} value={ price } />
                    <img src={image} height={100} width={350} />
                    <input type='file' accept='.jpg, .png' onChange={convert} className='editroom-input' />
                    
                    <label>Room Type-</label>
                    <select className="editroom-input" onChange={(e)=>setType(e.target.value)} value={type}>
                        <option hidden>Select Room Type</option>  
                        <option value="1 Person">1 Person</option>  
                        <option value="2 Person">2 Person</option>  
                        <option value="3 Person">3 Person</option>  
                        <option value="4 Person">4 Person</option>  
                    </select>
                    <label>Room Status-</label>
                    <select className="editroom-input" onChange={(e)=>setStatus(e.target.value)} value={status}>
                        <option hidden>Select Status</option>  
                        <option value="Available">Available</option>  
                        <option value="Not Available">Not Available</option>  
                    </select>

                    <button className='btn btn-primary' onClick={ updateroom }>Update Room</button>
                </div>
            </div>
        </div>
    );
}

export default Editroom;
