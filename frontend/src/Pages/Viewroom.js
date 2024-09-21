import './Viewroom.css';
import Adminheader from '../Common/Adminheader';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Viewroom = () => {
    let [room, setRoom] = useState([]);
    let roomdata = async () => {
        let data = await fetch(`https://room-booking-api-umber.vercel.app/getroom`);
        data = await data.json();
        setRoom(data);
    }
    useEffect(() => {
        roomdata();
    });

    let deleteroom =async (id) =>{
        let result = await fetch(`https://room-booking-api-umber.vercel.app/deleteroom/${id}`,{
            method:'delete'
        });
        result = result.json();
        if(result){
            roomdata();
        }
    }

    return (
        <div>
            <Adminheader />
            <div className='row m-auto viewroom-base justify-content-center'>
                    {
                        room.map((item, index) =>
                            <div className='col-md-3 m-3 viewroom-main'>
                                <div className=''><img className='room-img' src={item.image} alt='Room' /></div>
                                <table>
                                    <tr>
                                        <th>Room No. </th>
                                        <th> : {item.rno}</th>
                                    </tr>
                                    <tr>
                                        <th>Price.</th>
                                        <th> : {item.price}</th>
                                    </tr>
                                    <tr>
                                        <th>Type</th>
                                        <th> : {item.type}</th>
                                    </tr>
                                    <tr>
                                        <th>Status </th>
                                        <th> : {item.status}</th>
                                    </tr>
                                </table>
                                <Link to={"/editroom/"+item._id} className="btn btn-info ">Edit</Link> | 
                                <button className="btn btn-danger" onClick={()=> deleteroom(item._id)}>Delete</button>
                            </div>
                        )
                    }
                </div>
        </div>
    );
}


export default Viewroom;
