import './Adminheader.css';
import { Link } from 'react-router-dom';


const Adminheader = () =>{
    let logout = () =>{
        localStorage.clear();
    }

    return (
        <div>
            <div className='row m-auto adminheader-base'>
                <div className='col-2 adminheader-topic'>Room <i class="fa-solid fa-cart-flatbed-suitcase"></i></div>
                <div className='col-10 adminheader-menu'>
                    <Link to="/adminhome">Home</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/addroom">Add Rooms</Link>
                    <Link to="/viewroom">Rooms</Link>
                    <Link to="/viewbooking">Booking</Link>
                    <Link to="/viewfeedback">Feedback</Link>
                    <Link onClick={ logout } to="/adminlogin">Logout</Link>
                </div>
            </div>
        </div>
    );
}


export default Adminheader;