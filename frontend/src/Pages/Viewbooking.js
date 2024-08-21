import { useState } from "react";
import Adminheader from "../Common/Adminheader";
import { useEffect } from "react";
import './Viewfeedback.css';
import { Link } from "react-router-dom";


const Viewbooking = () => {
    let [data, setData] = useState([]);

    let bookingdata = async () => {
        let result = await fetch(`http://localhost:4500/bookings`);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        bookingdata();
    }, []);

    let delbooking = async (id) => {
        if (window.confirm("Are you sure?")) {
            let result = await fetch(`http://localhost:4500/deletebooking/${id}`, {
                method: 'delete'
            });
            result = result.json();
            if (result) {
                bookingdata();
            }
        }
    }
    const searchbooking = async (e) => {
        let key = e.target.value;
        if (key) {
            let result = await fetch(`http://localhost:4500/searchbooking/${key}`);
            result = await result.json();
            if (result) {
                setData(result);
            }
        } else {
            bookingdata();
        }
    }



    return (
        <div>
            <Adminheader />

            <div className="row m-auto justify-content-center viewfeedback-base">
                <input type="search" className="viewbooking-search" placeholder="Search by email or name or booking date"
                    onChange={searchbooking} />
                <div className="col-md-10 viewfeedback-main">
                    <table className="table table-bordered">
                        <tr align="center">
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Room No.</th>
                            <th>Price</th>
                            <th>Duration</th>
                            <th>Type</th>
                            <th>Booking Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        {
                            data.length > 0 ? data.map((item, index) =>
                                <tr align="center">
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.roomno}</td>
                                    <td>{item.price}</td>
                                    <td>{item.duration} Month</td>
                                    <td>{item.type}</td>
                                    <td>{item.bookingdate}</td>
                                    <td><Link to="#" className="btn btn-primary btn-sm disabled">{item.status}</Link></td>
                                    <td>
                                        <Link to={"/editbooking/" + item._id}><i class="fa-regular fa-pen-to-square"></i></Link> |
                                        <button onClick={() => delbooking(item._id)} className="btn btn-danger btn-sm"><i class="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ) :
                                <tr align="center">
                                    <th colSpan="12">
                                        <h1>No Booking Found</h1>
                                    </th>
                                </tr>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Viewbooking;