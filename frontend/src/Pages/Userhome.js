import Userheader from "../Common/Userheader";
import './UserHome.css';

const Userhome = () =>{
    return(
        <div>
            <Userheader />
            <div className="home-base1">
                <div className="home-content1">
                    Welcome <br />to <br/>Room Rental<br/>Services
                </div>
                <div className="home-image1"></div>
            </div>
        </div>
    );
}

export default Userhome;
