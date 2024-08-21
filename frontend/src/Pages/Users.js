import { useState } from "react";
import Adminheader from "../Common/Adminheader";
import { useEffect } from "react";
import './Users.css';


const Users = () => {
    let [data, setData] = useState([]);
    let users = async () => {
        let result = await fetch(`http://localhost:4500/viewusers`);
        result = await result.json();
        setData(result);
    }
    useEffect(() => {
        users();
    }, []);

    let deluser =async (id) =>{
        let result = await fetch(`http://localhost:4500/deleteuser/${id}`,{
            method:'delete'
        });
        result = result.json();
        if(result){
            users();
        }
    }

    return (
        <div>
            <Adminheader />
            <div className="row m-auto justify-content-center users-base">
                <div className="col-md-10 users-main">
                    <table className="table table-bordered">
                        <tr align="center">
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        {
                            data.length>0 ? data.map((item, index) =>
                                <tr align="center">
                                    <td>{ index+1 }</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.contact}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.address}</td>
                                    <td><button className="btn btn-danger btn-sm" onClick={()=> deluser(item._id)}>Delete</button></td>
                                </tr>
                            ) : 
                            <tr align="center">
                                <td colSpan="9">
                                    <div className="user-data bg-none">No Data Found</div>
                                </td>
                            </tr>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Users;