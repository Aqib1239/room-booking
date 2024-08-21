import './Userheader.css';
import { Link } from 'react-router-dom';


const Userheader = () =>{
    let logout = () =>{
        localStorage.clear();
    }

    return (
        <div>
            <div className='row m-auto userheader-base'>
                <div className='col-2 userheader-topic'>Room <i class="fa-solid fa-cart-flatbed-suitcase"></i></div>
                <div className='col-10 userheader-menu'>
                    <Link to="/userhome">Home</Link>
                    <Link to="/rooms">Rooms</Link>
                    <Link to="/mybooking">My Booking</Link>
                    <Link to="/feedback">Feedback</Link>
                    <Link onClick={ logout } to="/login">Logout</Link>
                </div>
            </div>
        </div>
    );
}


export default Userheader;