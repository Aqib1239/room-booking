import './Viewroom.css';
import Userheader from '../Common/Userheader';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Rooms = () => {
    let [room, setRoom] = useState([]);
    let roomdata = async () => {
        let data = await fetch(`http://localhost:4500/getroom`);
        data = await data.json();
        setRoom(data);
    }
    useEffect(() => {
        roomdata();
    },[]);

    const searchroom = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:4500/searchroom/${key}`);
            result = await result.json();
            if (result) {
                setRoom(result);
            }
        } else {
            roomdata();
        }
    }


    return (
        <div>
            <Userheader />
            <div className='row m-auto viewroom-base justify-content-center'>
                <input type='search' placeholder='Search by room type' 
                onChange={ searchroom } />
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
                                {
                                    item.status==="Available" ? (
                                        <Link to={"/booknow/"+item._id} className="btn btn-info ">Boom Now</Link>
                                    ) :
                                    <></>
                                }
                            </div>
                        )
                    }
                </div>
        </div>
    );
}


export default Rooms;