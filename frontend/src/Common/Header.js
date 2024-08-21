import './Header.css';
import { Link } from 'react-router-dom';


const Header = () =>{
    return (
        <div>
            <div className='row m-auto header-base'>
                <div className='col-4 header-topic'>Room <i class="fa-solid fa-cart-flatbed-suitcase"></i></div>
                <div className='col-8 header-menu'>
                    <Link to="/">Home</Link>
                    <Link to="#">About Us</Link>
                    <Link to="/login">UserLogin</Link>
                    <Link to="/adminlogin">AdminLogin</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </div>
        </div>
    );
}


export default Header;