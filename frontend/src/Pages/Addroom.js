import { useState } from "react";
import Adminheader from "../Common/Adminheader";
import './Addroom.css';
import { useNavigate } from "react-router";


const Addroom = () =>{
    let navigate = useNavigate();
    let [rno,setRno] = useState("");
    let [price,setPrice] = useState("");
    let [image,setImage] = useState("");
    let [type,setType] = useState("");
    let [status,setStatus] = useState("");

    let convert = (e) =>{
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () =>{
            setImage(reader.result);
        };
    }
    let addroom =async () =>{
        console.log(rno,price,type,status,image);
        let result = await fetch(`https://room-booking-api-umber.vercel.app/addroom`, {
            method: 'post',
            corssDomain:true,
            body: JSON.stringify({ rno,price,image,type,status }),
            headers: {
                'Content-Type': 'application/json',
                Accept:"application/json",
                "Access-Control-Allow-Origin":"*",
            },
        });
        result = await result.json();
        if (result) {
            alert("Room Added Successfull");
        }
        navigate('/addroom');
    }

    return(
        <div>
            <Adminheader />
            <div className="row m-auto justify-content-center addroom-base">
                <div className="col-md-6 addroom-main">
                    <u><h2>Add New Room</h2></u>
                    <input type="text" placeholder="Enter Room Number" className="addroom-input"
                    onChange={(e)=>setRno(e.target.value)} value={rno} />
                    <input type="number" placeholder="Enter Price" className="addroom-input"
                    onChange={(e)=>setPrice(e.target.value)} value={price} />
                    <input type="file" accept=".jpg,.png" className="addroom-input"
                    onChange={ convert } />
                    <label>Room Type-</label>
                    <select className="addroom-input" onChange={(e)=>setType(e.target.value)} value={type}>
                        <option hidden>Select Room Type</option>  
                        <option value="1 Person">1 Person</option>  
                        <option value="2 Person">2 Person</option>  
                        <option value="3 Person">3 Person</option>  
                        <option value="4 Person">4 Person</option>  
                    </select>
                    <label>Room Status-</label>
                    <select className="addroom-input" onChange={(e)=>setStatus(e.target.value)} value={status}>
                        <option hidden>Select Status</option>  
                        <option value="Available">Available</option>  
                        <option value="Not Available">Not Available</option>  
                    </select>
                    <button onClick={ addroom }>Add Room</button>
                </div>
            </div>
        </div>
    );
}

export default Addroom;
